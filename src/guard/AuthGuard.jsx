import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

export const AuthGuard = () => {

    const {token} = useContext(UserContext)
    console.log('->', token)

    if (!token) {
        return (
            <Navigate 
                to='/'
                replace 
            />
        );
    }
  return (
    <Outlet/>
  )
}

