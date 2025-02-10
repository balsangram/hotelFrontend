import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [storeToken , setStoreToken] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo , setUSerInfo] = useState();

  const login = (userData) => {
    setUSerInfo(userData)
    setIsAuthenticated(true);
  }
  const logout = () => {
    setUSerInfo()
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout , userInfo, setUSerInfo}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
