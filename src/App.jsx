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
import { CartProvider } from './context/CartProvider';
import { PizzaProvider } from './context/PizzaProvider';
import { AuthGuard } from './guard/AuthGuard';
import { UserProvider } from './context/UserProvider';


function App() {

  return <>
  <UserProvider>
    <PizzaProvider>
      <CartProvider>
          <Navbar/>
          <Routes>
            <Route 
              path='/' 
              element={<Home/>}
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
              element={<Cart/>}
            />

            <Route 
              path='/pizza/:id' 
              element={<Pizza />}
            />

            <Route
              element = {
                <AuthGuard/>
              }
            >
              <Route
              path='/profile'
              element={<Profile />}
              />
            </Route>


            <Route 
              path='*' 
              element={<NotFound />}
            />
          </Routes>
          <Footer />
      </CartProvider>
  </PizzaProvider>
  </UserProvider>
  </> 
}

export default App;

