export const Navbar = () => {
    const total = 25000;
    const token = false;

  return (
<nav className ="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <form className="d-flex justify-content-start align-items-center w-100">
        <div className="container d-flex justify-content-start align-items-center text-light m-0">
            <div>
            <p className="mb-0">Pizzería Mamma Mia!</p>
            </div>
            <div>
            <button className="btn btn-sm btn-outline-light m-2" type="button">🍕 Home</button>
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
            <button className="btn btn-sm btn-outline-light" type="button">🔐 Login</button>       
            </div>
            <div>
            <button className="btn btn-sm btn-outline-light m-2" type="button">🔐 Register</button>
            </div>
                </>
            )}
        </div>
        <div>
            <button type="button" className="btn btn-sm btn-outline-info">🛒 Total: ${total.toLocaleString('es-ES')}</button>
        </div>
    </form>
</nav>
  )
};

