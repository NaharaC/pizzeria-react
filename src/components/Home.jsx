import { Header } from "./Header";
import { CardPizza } from "./CardPizza";

export const Home = () => {

    const pizzas = [
        {
            img: '/public/img/pizza-1.jpg',
            title: 'Pizza Napolitana',
            ingredients: ['mozzarella', 'tomates', 'jamón', 'orégano'],
            price: 5950,
        },
        {
            img: '/public/img/pizza-2.jpg',
            title: 'Pizza Española',
            ingredients: ['mozzarella', 'gorgonzola', 'parmesano', 'porvolone'],
            price: 6950,
        },
        {
            img: '/public/img/pizza-3.jpg',
            title: 'Pizza Pepperoni',
            ingredients: ['mozzarella', 'pepperoni', 'orégano'],
            price: 6950,
        },
    ]
    const renderCard = () => {
        const cardsHTML = pizzas.map((pizza) => (
            // eslint-disable-next-line react/jsx-key
            <CardPizza 
                img={pizza.img}
                title={pizza.title}
                ingredients={pizza.ingredients}
                price={pizza.price}
            />
        ))
        return cardsHTML;
    }

  return <>
            <Header/>
            <div className="d-flex p-4 justify-content-around">
            {renderCard()}
            </div>
        </>
};
