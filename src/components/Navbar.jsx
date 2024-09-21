import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartProvider";
import { UserContext } from "../context/UserProvider";


export const Navbar = () => {
    const { totalCart} = useContext(CartContext);
    const {token, logout} = useContext(UserContext);

  return (
<nav className ="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <form className="d-flex justify-content-start align-items-center w-100">
        <div className="container d-flex justify-content-start align-items-center text-light m-0">
            <div>
            <p className="mb-0">Pizzería Mamma Mia!</p>
            </div>
            <div>
            <Link className="btn btn-sm btn-outline-light m-2" type="button" to= '/'>🍕 Home</Link>
            </div>
                {token ? (
                    <>
            <div>
            <Link className="btn btn-sm btn-outline-light" type="button" to= '/profile'>🔓 Profile</Link>       
            </div>
            <div>
            <button className="btn btn-sm btn-outline-light m-2" type="button" onClick={() => logout()}>🔒 Logout</button>
            </div>
                    </>
            ) : (
                <>
            <div>
            <Link className="btn btn-sm btn-outline-light" type="button" to='/login'>🔐 Login</Link>       
            </div>
            <div>
            <Link className="btn btn-sm btn-outline-light m-2" type="button" to= '/register'>🔐 Register</Link>
            </div>
                </>
            )}
        </div>
        <div>
            <Link type="button" className="btn btn-sm btn-outline-info" to='/cart'>🛒 Total: ${totalCart()}</Link>
        </div>
    </form>
</nav>
  )
};

