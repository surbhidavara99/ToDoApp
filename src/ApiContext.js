import React, {useContext, useState, useEffect, createContext} from 'react';
import axios from 'axios';

const APIContext = createContext();

export function APIContextProvider({children}) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const {data} = await axios.get(
        `https://jsonplaceholder.typicode.com/users`,
      );
      setUser(data);
    }

    fetchData();
  }, []);

  return <APIContext.Provider value={user}>{children}</APIContext.Provider>;
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error('Context must be used within a Provider');
  }
  return context;
}
