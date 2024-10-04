import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Men from './Men'
import Women from './Women'
import Kids from './Kids'
import Nav from './Nav'
import Cart from './Cart'
import Context from './Context'

export default function Router() {
  return (
    <div>
      <Context>
     <BrowserRouter>
     <Nav/>
     <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/men' element={<Men/>}/>
          <Route path='women' element={<Women/>}/>
          <Route path='/kids' element={<Kids/>}/>
          <Route path='/cart' element={<Cart/> }/>
     </Routes>
     </BrowserRouter>
      </Context>
    </div>
  )
}
