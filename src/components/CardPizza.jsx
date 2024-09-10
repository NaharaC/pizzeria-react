import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

export const CardPizza = ({data}) => {

    const {cart, setCart} = useContext(CartContext)

      const { name, price, id, img, desc, ingredients } = data;

    const addToCart = () => {

        if (cart && cart.length === 0) {
            setCart([{name, price, id, cantidad:1}])
            return
        }
        
        const existPizzaId = cart.some((pizza) => pizza.id === id) 
        
        if (!existPizzaId) {
            setCart([...cart, {name, price, id, cantidad:1}])
            return
        }

        const newCart = cart.map((pizza) => {
            if (pizza.id == id) {
                return { 
                    ...pizza,
                    cantidad: pizza.cantidad + 1
                }
            } 
            return (pizza)
        })
        setCart(newCart)
    }


    return (
        <>
        <div className="card col-md-3 m-3">
            <img src={img} alt="Imagen Pizza" className="card-img-top" />
            <h5 className="card-title fw-light mx-3 mt-3 fw-semibold">{name}</h5>
            <p className="mx-3">{desc}</p>
            <hr />
            <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="card-text h6 fw-light">Ingredientes:</p>
                <p className="fw-light mb-0 text-center w-60">🍕 
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>
                            {ingredient}
                        </li>
                    ))}
                </p>
            </div>
            <hr />
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h4 className="mb-3">Precio: ${price.toLocaleString('es-ES')}</h4>
                <div className="d-flex justify-content-around w-100 mb-3">
                    <button type="button" className="btn btn-sm btn-dark" onClick={()  => (addToCart(name, price, id))}>Añadir 🛒</button>                        
                </div>
            </div>
        </div>

        </>
    )
}
