import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

 export const MyContext = createContext();

const ContextProvider = ({children}) => {
  const allContext = useFirebase()
  
  return (
    <MyContext.Provider value={allContext}>
        {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;