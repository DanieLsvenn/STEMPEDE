import React, { createContext, useState, useEffect } from "react";
import { fetchProducts } from "../api/product"; // Import fetchProducts from API
import { fetchCurrentUserCart, addItemToCart, updateItemQuantity, removeItemFromCart, clearAllItems } from "../api/cart"; // Import new API functions
import useRefreshToken from "../hooks/useRefreshToken";

const AuthContext = createContext({});
const CartContext = createContext(null);

// const getDefaultCart = (products) => {
//     let cart = {};
//     for (let index = 0; index < products.length; index++) {
//         cart[products[index].id] = 0;
//     }
//     return cart;
// };

const MergedProvider = ({ children }) => {
    const [auth, setAuth] = useState({ user: null, roles: [] });
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const refresh = useRefreshToken();

    // Fetch products on mount
    useEffect(() => {
        const getProductsAndCart = async () => {
            try {
                const fetchedCart = await fetchCurrentUserCart();
                if (fetchedCart && fetchedCart.success) {
                    const cartItems = {};
                    fetchedCart.data.items.forEach(item => {
                        cartItems[item.productId] = item.quantity;
                    });
                    setCartItems(cartItems);
                } else {
                    console.error("Failed to fetch cart:", fetchedCart);
                }
            } catch (error) {
                console.error("Error fetching cart:", error);
                if (error.response && error.response.status === 401) {
                    const newAccessToken = await refresh();
                    if (newAccessToken) {
                        const fetchedCart = await fetchCurrentUserCart();
                    }
                }
            }
        };
        getProductsAndCart();
    }, [auth, refresh]);

    // Cart management functions
    const addToCart = async (itemId) => {
        await addItemToCart(itemId, 1); // Add one item to the cart
        setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    };

    const updateCartItemQuantity = async (cartItemId, quantity) => {
        await updateItemQuantity(cartItemId, quantity);
        setCartItems((prev) => ({ ...prev, [cartItemId]: quantity }));
    };

    const removeFromCart = async (cartItemId) => {
        await removeItemFromCart(cartItemId);
        setCartItems((prev) => {
            const newCart = { ...prev };
            delete newCart[cartItemId];
            return newCart;
        });
    };

    const clearCart = async () => {
        await clearAllItems();
        setCartItems({});
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find(
                    (product) => product.id === Number(item)
                );
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
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