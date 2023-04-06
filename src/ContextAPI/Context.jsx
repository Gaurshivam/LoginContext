import React, { createContext, useState } from 'react'

export const myContext = createContext();


function CustomProvider({children}){
    const [isloggedIn,setIsloggedIn] = useState(false)
    return <myContext.Provider value={{isloggedIn,setIsloggedIn}}>
        {children}
    </myContext.Provider>
}

export default CustomProvider;