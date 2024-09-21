import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({children}) => {

  // para volver a dejar logeado hay que cerrar y abrir la pestaña
  const [token, setToken] = useState(true);
  
  
  useEffect(() => {
    const tokenSessionStorage = sessionStorage.getItem("token") === "true" || sessionStorage.getItem("token") === null ? true : false;
    setToken(tokenSessionStorage);
  }, [token])
  
  const navigate = useNavigate();

 const logout = () => {
  setToken(false);
  sessionStorage.setItem("token", "false");
  navigate(`/`)
 }

  return (
    <UserContext.Provider value ={{token, logout}}>
      {children}
    </UserContext.Provider>
  )
}
