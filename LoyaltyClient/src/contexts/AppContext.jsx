import React from "react";
const AppContext = React.createContext();
import { useEffect, useState,useContext } from "react";
import api from "../api";
import { getUsers } from "../services/users";

export function AppContextProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [details, setDetails] = useState({
    user: "Subho",
    date: "total",
  });
  const [showDescriptionTable, setShowDescriptionTable] = useState(false);
  

  useEffect(() => {
    setTimeout(() => {
      getUsers().then(setUsers).catch((err)=>{})
    }, 1000);
  }, []);
  return (
    <AppContext.Provider
      value={{
        users,
        showDescriptionTable,
        setShowDescriptionTable,
        details,
        setDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppData=()=>{
    return useContext(AppContext)
}
