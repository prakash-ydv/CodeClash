import { useContext } from "react";
import { createContext } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const hello = "hello";
  return (
    <UserContext.Provider value={{ hello }}>{children}</UserContext.Provider>
  );
};
