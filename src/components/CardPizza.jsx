/* eslint-disable react/prop-types */
export const CardPizza = ({ img, title, ingredients, price}) => {
    return (
        <>
        <div className="card col-md-3 mx-2">
            <img src={img} alt="Imagen Pizza" className="card-img-top" />
					<h5 className="card-title fw-light mx-3 mt-3 fw-semibold">{title}</h5>
                    <hr />
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <p className="card-text h6 fw-light">Ingredientes:</p>
                        <p className="fw-light mb-0 text-center w-60">🍕 {ingredients.join(", ")}</p>
                    </div>
					<hr />
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h4 className="mb-3">Precio: ${price.toLocaleString('es-ES')}</h4>
                        <div className="d-flex justify-content-around w-100 mb-3">
                            <button type="button" className="btn btn-sm btn-outline-dark">Ver Más 👀</button> 
                            <button type="button" className="btn btn-sm btn-dark">Añadir 🛒</button>                        
                        </div>
                    </div>
                    
				</div>
        </>
    );
};