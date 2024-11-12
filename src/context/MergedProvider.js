import React, { createContext, useState, useEffect } from "react";
import { fetchProducts } from "../api/product"; // Import fetchProducts from API
import {
  fetchCurrentUserCart,
  addItemToCart,
  updateItemQuantity,
  removeItemFromCart,
  clearAllItems,
} from "../api/cart"; // Import new API functions
import useRefreshToken from "../hooks/useRefreshToken";

const AuthContext = createContext({});
const CartContext = createContext(null);

const MergedProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user: null, roles: [] });
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const refresh = useRefreshToken();

  // Retrieve token from local storage
  const token = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  // Fetch products on mount
  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      console.log(fetchProducts);
      if (
        fetchedProducts &&
        fetchedProducts.data &&
        Array.isArray(fetchedProducts.data.items)
      ) {
        setProducts(fetchedProducts.data.items);
        
      } else {
        console.error(
          "Failed to fetch products or products data is not an array:",
          fetchedProducts
        );
      }
    };

    const getProductsAndCart = async () => {
      
      try {
        const fetchedCart = await fetchCurrentUserCart(token);
        console.log(fetchedCart);
        if (fetchedCart && fetchedCart.success) {
          const cartItems = {};
          fetchedCart.data.items.forEach((item) => {
            cartItems[item.productId] = item;
          });
          setCartItems(cartItems);
          console.log(cartItems)
        } else {
          console.error("Failed to fetch cart:", fetchedCart);
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
        if (error.response && error.response.status === 401) {
          const newAccessToken = await refresh(refreshToken);
          if (newAccessToken) {
            const fetchedCart = await fetchCurrentUserCart(newAccessToken);
            // Update token in local storage
            localStorage.setItem("accessToken", newAccessToken);
          }
        }
      }
    };
    getProducts();
    getProductsAndCart();
  }, []);

  // Cart management functions
  const addToCart = async (itemId) => {
    await addItemToCart(itemId, 1, token); // Add one item to the cart
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const updateCartItemQuantity = async (cartItemId, quantity) => {
    await updateItemQuantity(cartItemId, quantity, token);
    setCartItems((prev) => ({ ...prev, [cartItemId]: quantity }));
  };

  const removeFromCart = async (cartItemId) => {
    await removeItemFromCart(cartItemId, token);
    setCartItems((prev) => {
      const newCart = { ...prev };
      delete newCart[cartItemId];
      return newCart;
    });
  };

  const clearCart = async () => {
    await clearAllItems(token);
    setCartItems({});
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        totalAmount += itemInfo?.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item.quantity] > 0) {
        totalItem += cartItems[item.quantity];
      }
    }
    return totalItem;
  };

  // Context value
  const contextValue = {
    auth,
    setAuth,
    products,
    cartItems,
    addToCart,
    updateCartItemQuantity,
    removeFromCart,
    clearCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <CartContext.Provider value={contextValue}>
        {children}
      </CartContext.Provider>
    </AuthContext.Provider>
  );
};

export { AuthContext, CartContext, MergedProvider };
