import { useContext} from "react";
import { CartContext } from "../context/CartProvider";
import { UserContext } from "../context/UserProvider";

export const Cart = () => {

    const {cart, removeFromCart, totalCart} = useContext(CartContext)
    const {token} = useContext(UserContext)

    const renderCart = () => {
        const cartHTML = cart.map((pizza, index) => (
                <div className="card col-md-3 m-3" key={index}>
                    <h5 className="card-title fw-light mx-3 mt-3 fw-semibold">{pizza.name}</h5>
                    <hr />
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <p className="card-text h6 fw-light">Cantidad:{pizza.cantidad}</p>
                    </div>
                    <hr />
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h5 className="mb-3">Precio unitario: ${pizza.price.toLocaleString('es-ES')}</h5>
                        <div className="d-flex justify-content-around w-100 mb-3">
                            <button type="button" className="btn btn-sm btn-outline-dark" onClick={()  => (removeFromCart(pizza.id, pizza.cantidad))}>Eliminar 🚫</button> 
                        </div>
                    </div>
                </div>
                
        ))
        return cartHTML;
    }

    return (
        <>
        <div className="d-flex justify-content-between m-5">
            <h3>Carrito de compras</h3>
            <h3>Total: ${totalCart()}</h3>
        </div>
        <div className="d-flex p-4 justify-content-around flex-wrap">
        {renderCart()}
        </div>
        {token ? (
        <div className="d-flex p-4 justify-content-center">
            <button type="button" className="btn btn-dark">Pagar</button>
        </div>
        ) :
        ('')}
        </>
    )
}