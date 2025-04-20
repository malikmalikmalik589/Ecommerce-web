import React, { useState, useEffect, createContext } from "react";
import all_product from "../Components/Assets/all_product";

const getDefaultCart = () => {
    let cart = {};
    all_product.forEach((product) => {
        cart[product.id] = 0;  // ✅ Uses product IDs instead of array indexes
    });
    return cart;
};

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        console.log("Updated Cart Items:", cartItems);  // ✅ Logs state updates correctly
    }, [cartItems]);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [String(itemId)]: (prev[String(itemId)] || 0) + 1,  // ✅ Ensures correct key format
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [String(itemId)]: Math.max((prev[String(itemId)] || 0) - 1, 0),
        }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;  // ✅ Fixed incorrect return
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

    return (
        <ShopContext.Provider
            value={{ getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart }}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
