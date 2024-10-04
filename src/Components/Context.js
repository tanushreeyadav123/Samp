import React, { createContext, useState } from 'react'

export let user1=createContext();
export default function Context({children}) {
     let [ct,setct]=useState([])
  return (
    <div>
     <user1.Provider value={{ct,setct}}>
     {children}
     </user1.Provider>
    </div>
  )
}
