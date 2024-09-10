import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);

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

    const totalCart =() => {
        let counter = 0
        cart.forEach(pizza => {
            counter += pizza.price * pizza.cantidad
        });
        return (
            counter
        )
    }


  return (
    <>
     <CartContext.Provider value = {{cart, setCart,removeFromCart, totalCart}}>
        {children}
     </CartContext.Provider>
    </>    
  )
}