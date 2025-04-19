import { createContext, useState } from "react";

export const ApiContext = createContext("")


export function MyApiProvider({children}){

  

    const [data , setData] = useState([])


  


    return (
        <>
        <ApiContext.Provider value={{data,setData}} >
            {children}
        </ApiContext.Provider>
        </>
    )
    
}