import React, { PropsWithChildren, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface IRequireAuth extends PropsWithChildren {
  children?: ReactNode;
}

const RequireAuth: React.FC<any> = ({children}) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to='/login' />
  }

  return (
    children
  )
}

export default RequireAuth;