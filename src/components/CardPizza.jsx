import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

export const CardPizza = ({data}) => {

    const {addToCart} = useContext(CartContext)

      const { name, price, id, img, desc, ingredients } = data;

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
