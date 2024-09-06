export const Cart = ({cart, setCart}) => {

    const removeFromCart = (id, cantidad) => {

        const newCart = cart.filter((pizza) => pizza.id !== id);
        if (cantidad === 1) {
            setCart(newCart)
            return
        }

        if (cantidad !== 1) {
            const restNewCart = cart.map((pizza) =>{
                if (pizza.id === id) {
                    return {
                        ...pizza,
                        cantidad: cantidad - 1
                    }
                }
                return (pizza)
            })
            setCart(restNewCart)
        }
    }

    const renderCart = () => {
        const cartHTML = cart.map((pizza, index) => (
            // eslint-disable-next-line react/jsx-key
                <div className="card col-md-3 m-3" key={index}>
                    {/* <img src={pizza.img} alt="Imagen Pizza" className="card-img-top" /> */}
                    <h5 className="card-title fw-light mx-3 mt-3 fw-semibold">{pizza.name}</h5>
                    {/* <p className="mx-3">{desc}</p> */}
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
            <h3>Productos seleccionados</h3>
        </div>
        <div className="d-flex p-4 justify-content-around flex-wrap">
        {renderCart()}
        </div>
        </>
    )
}