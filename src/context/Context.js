import React, { createContext } from "react";
import all_product from '../assets/products/all_products'

export const Context = createContext(null);

const ContextProvider = (props) => {
    const contextValue = {all_product};

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider