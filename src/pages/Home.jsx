import { Header } from "../components/Header";
import { useContext, useEffect } from "react";
import { PizzaContext } from "../context/PizzaProvider";
import { CardPizza } from "../components/CardPizza";

export const Home = () => {
    
    const {pizzasState, fetchPizzas} = useContext(PizzaContext)
    const url = 'http://localhost:5001/api/pizzas';

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

    return <>
            <Header/>
            <div className="d-flex p-4 justify-content-around flex-wrap">
            {renderCard()}
            </div>
        </>;
};
