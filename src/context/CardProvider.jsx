import { createContext, useEffect, useState } from "react";
import { CardPizza } from "../components/CardPizza";

export const CardContext = createContext();
export const CardProvider = ({children}) => {

    const [pizzasState, setPizzasState] = useState([]);
    const url = 'http://localhost:5001/api/pizzas';
    
    
    const fetchPizzas = async (url) => {
        const response = await fetch(url);
        const results = await response.json();
        setPizzasState(results);
    };
    
     useEffect(() => {
        fetchPizzas(url)
    }, [])

        const renderCard = () => {
        const cardsHTML = pizzasState.map((pizza, index) => (
                <CardPizza
                    key= {index} 
                    data={pizza}
                />
                
        ))
        return cardsHTML;
    };



    return (
        <>
        <CardContext.Provider value = {{renderCard}}>
            {children}
        </CardContext.Provider>
        </>
    )
}