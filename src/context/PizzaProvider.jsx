import { createContext, useState } from "react";

export const PizzaContext = createContext();
export const PizzaProvider = ({children}) => {

    const [pizzasState, setPizzasState] = useState([]);
    
    const fetchPizzas = async (url) => {
        const response = await fetch(url);
        const results = await response.json();
        setPizzasState(results);
    };
    
    return (
        <>
        <PizzaContext.Provider value = {{pizzasState, fetchPizzas}}>
            {children}
        </PizzaContext.Provider>
        </>
    )
}