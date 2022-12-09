import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";

interface Props {
    children: JSX.Element[] | JSX.Element
  }

export const Protected = ({children}:Props) => {
    const [token, setToken] = useLocalStorage("tokValue", undefined)
    if(typeof token === 'undefined'){
        return <Navigate to="/" replace/>
    }
    else{
        return <>{children}</>
    }
}