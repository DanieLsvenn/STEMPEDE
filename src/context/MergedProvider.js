import React, { createContext, useState, useEffect } from "react";
import { fetchProducts } from "../api/product";

const AuthContext = createContext({});
const CartContext = createContext(null);

const getDefaultCart = (products) => {
    let cart = {};
    for (let index = 0; index < products.length; index++) {
        cart[products[index].id] = 0;
    }
    return cart;
};

const MergedProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const fetchedProducts = await fetchProducts();
            if (
                fetchedProducts &&
                fetchedProducts.data &&
                Array.isArray(fetchedProducts.data.items)
            ) {
                setProducts(fetchedProducts.data.items);
                setCartItems(getDefaultCart(fetchedProducts.data.items));
            } else {
                console.error(
                    "Failed to fetch products or products data is not an array:",
                    fetchedProducts
                );
            }
        };
        getProducts();
    }, []);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find(
                    (product) => product.productID === Number(item)
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

    const contextValue = {
        auth,
        setAuth,
        products,
        cartItems,
        addToCart,
        removeFromCart,
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