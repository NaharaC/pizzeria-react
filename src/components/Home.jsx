import { Header } from "./Header";
import { CardPizza } from "./CardPizza";
import { pizzas } from "../pizzas";
import { Cart } from "./Cart";
import { useState } from "react";

export const Home = () => {

    const [cart, setCart] = useState([]);


    const renderCard = () => {
        const cardsHTML = pizzas.map((pizza) => (
            // eslint-disable-next-line react/jsx-key
                <CardPizza 
                    id={pizza.id}
                    img={pizza.img}
                    name={pizza.name}
                    desc={pizza.desc}
                    ingredients={pizza.ingredients}
                    price={pizza.price}
                    cart={cart}
                    setCart={setCart}
                />
                
        ))
        return cardsHTML;
    }
    

  return <>
            <Header/>
            <Cart cart={cart} setCart={setCart}/>
            <div className="d-flex p-4 justify-content-around flex-wrap">
            {renderCard()}
            </div>
        </>
};
