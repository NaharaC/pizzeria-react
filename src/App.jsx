import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { Navbar } from './components/Navbar';
import {Footer} from './components/Footer'
import { Home } from './pages/Home';
import {Register} from './pages/Register'
import {Login} from './pages/Login'
import {Cart} from './pages/Cart'
import {Pizza} from './pages/Pizza'
import {Profile} from './pages/Profile'
import { useState} from "react";


function App() {

  const [cart, setCart] = useState([]);

      const totalCart =() => {
        let counter = 0
        cart.forEach(pizza => {
            counter += pizza.price * pizza.cantidad
        });
        return (
            counter
        )
    }

  return <>
  <Router>
    <Navbar totalCart ={totalCart}/>
    <Routes>
      <Route 
        path='/' 
        element={<Home cart={cart} setCart={setCart}/>}
      />

      <Route 
        path='/register' 
        element={<Register />}
      />

      <Route 
        path='/login' 
        element={<Login />}
      />

      <Route 
        path='/cart' 
        element={<Cart cart={cart} setCart={setCart} />}
      />

      <Route 
        path='/pizza/p001' 
        element={<Pizza />}
      />

      <Route 
        path='/profile' 
        element={<Profile />}
      />

      {/* Not Found */}
      <Route 
        path='*' 
        element={<NotFound />}
      />
    </Routes>
    <Footer />
  </Router>

  </> 
}

export default App;

