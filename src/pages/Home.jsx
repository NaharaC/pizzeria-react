import { Header } from "../components/Header";
import { CardPizza } from "../components/CardPizza";
// import { pizzas } from "../pizzas";
import { useState, useEffect } from "react";

export const Home = ({cart, setCart}) => {

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
              // eslint-disable-next-line react/jsx-key
                <CardPizza
                    key= {index} 
                    data={pizza}
                    cart={cart}
                    setCart={setCart}
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
