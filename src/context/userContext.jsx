import { createContext, useState } from "react";

export const Context = createContext("")


export function MyProvider({children}){

  

    const [user , setUser] = useState([])


  


    return (
        <>
        <Context.Provider value={{user, setUser}} >
            {children}
        </Context.Provider>
        </>
    )
    
}