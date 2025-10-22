import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import Cookies from "js-cookie";
import { fetchMYData } from "../api/user.api";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLogedIn, setIsLogedIn] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = Cookies.get("token");
        if (!token) return; // no token, skip
        const response = await fetchMYData(token);
        if (response) {
          setUser(response.data.user);
          setIsLogedIn(true);
        }
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    };

    fetchUser();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser, isLogedIn, setIsLogedIn }}>
      {children}
    </UserContext.Provider>
  );
};
