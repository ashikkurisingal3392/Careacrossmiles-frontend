import React, { createContext } from 'react'

//1.create context
export const searchContext =createContext("")

function SearchContextTask({children}) {


    //2.global state creation

    const[searchKey,setSearchKey]=React.useState("")
  return (
    <searchContext.Provider value={{searchKey,setSearchKey}}>
        {children}
      
    </searchContext.Provider>
  )
}

export default SearchContextTask
