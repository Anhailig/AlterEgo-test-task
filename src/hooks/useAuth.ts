import { useState } from "react"


export const useAuth = () => {
  const [user, setUser] = useState(localStorage.getItem('user'));

  const signIn = (newUser: any, cb: any) => {
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
    cb();
  }

  return {user, signIn};
}