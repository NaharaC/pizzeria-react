import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

export const AuthGuard = () => {

    const {session} = useContext(UserContext)
    console.log('->', session)

    if (!session.token) {
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

