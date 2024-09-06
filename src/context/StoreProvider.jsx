import { createContext } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({children}) => {
    return (
        <>
        <StoreContext.Provider> {children}</StoreContext.Provider>
        </>
    )
}