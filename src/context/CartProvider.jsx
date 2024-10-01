import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);
  const [check, setCheck] = useState(false) 

      const addToCart = (name, price, id) => {
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

    const checkOut = async () => {
    const response = await fetch('http://localhost:5001/api/checkouts', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({cart})
    });
    const responseCheckOut = await response.json()
    console.log(responseCheckOut)
    setCheck(true)
  }


  return (
    <>
     <CartContext.Provider value = {{cart, setCart, addToCart, removeFromCart, totalCart, checkOut, check}}>
        {children}
     </CartContext.Provider>
    </>    
  )
}