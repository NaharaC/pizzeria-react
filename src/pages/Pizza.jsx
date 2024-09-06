import { useState, useEffect } from "react";

export const Pizza = () => {
    const [pizza, setPizza] = useState({
        img: '',
        name: '',
        ingredients: [],
        desc: '',
        price: ''
    });
    const url = 'http://localhost:5001/api/pizzas/p001';


    const fetchPizza = async (url) => {
        const response = await fetch(url);
        const results = await response.json();
        setPizza(results);
    };
    
    
    useEffect(() => {
        fetchPizza(url)
    }, [])
    

    return (
      <>
        <div className="card col-md-3 m-3">
            <img src={pizza.img} alt="Imagen Pizza" className="card-img-top" />
            <h5 className="card-title fw-light mx-3 mt-3 fw-semibold">{pizza.name}</h5>
            <p className="mx-3">{pizza.desc}</p>
            <hr />
            <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="card-text h6 fw-light">Ingredientes:</p>
                <p className="fw-light mb-0 text-center w-60">🍕 
                    {pizza.ingredients.map((ingredient, index) => (
                        <li key={index}>
                            {ingredient}
                        </li>
                    ))}
                </p>
            </div>
            <hr />
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h4 className="mb-3">Precio: ${pizza.price.toLocaleString('es-ES')}</h4>
                <div className="d-flex justify-content-around w-100 mb-3">
                    <button type="button" className="btn btn-sm btn-dark">Añadir 🛒</button>                        
                </div>
            </div>
        </div>

        </>)

}