import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({children}) => {

  // para volver a dejar logeado hay que cerrar y abrir la pestaña
  const [session, setSession] = useState({
    email: null,
    token: null
  });
  
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const [register, setRegister] = useState({
    email: '',
    password: '',
  })

  const handleChangeLogin = (event) => {
    const {name, value} = event.target;
    setLogin ({
      ...login, 
      [name]: value,
    });
  };

  const handleChangeRegister = (event) => {
    const {name, value} = event.target;
    setRegister({
      ...register,
      [name]: value
    })
  }

  
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5001/api/auth/login', {
        method: 'POST',
        headers: {
           "Content-Type": 'application/json',
        }, 
        body: JSON.stringify(login),
      });
    const responseToken = await response.json()
    const {token: tokenAPI, email: emailAPI} = responseToken 
    localStorage.setItem('token', tokenAPI)
    localStorage.setItem('email', emailAPI)
    setSession({
      token: tokenAPI,
      email: emailAPI,
    })
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5001/api/auth/register', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(register)
    });
    const responseToken = await response.json()
    const {token: tokenAPI, email: emailAPI} = responseToken 
    localStorage.setItem('token', tokenAPI)
    localStorage.setItem('email', emailAPI)
    setSession({
      token: tokenAPI,
      email: emailAPI,
    })
  }

    const getProfile = async () => {
    const response = await fetch('http://localhost:5001/api/auth/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

    console.log(response);
    return await response.json()
  }

 const logout = () => {
  setSession({
    email: null,
    token: null
  });
  localStorage.removeItem('token')
  localStorage.removeItem('email')
  navigate(`/`)
 }

  return (
    <UserContext.Provider 
    value ={{
      session, 
      logout,
      handleChangeLogin,
      handleChangeRegister,
      handleLogin,
      handleRegister,
      getProfile
      }}>
      {children}
    </UserContext.Provider>
  )
}
