import { Link } from "react-router-dom";

export const Navbar = ({totalCart}) => {
    // const total = 25000;
    const token = false;

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
            <button className="btn btn-sm btn-outline-light" type="button">🔓 Profile</button>       
            </div>
            <div>
            <button className="btn btn-sm btn-outline-light m-2" type="button">🔒 Logout</button>
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
            <div>
                <Link className="btn btn-sm btn-outline-light m-2" type="button" to= '/profile'>📑 Perfil</Link>
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

