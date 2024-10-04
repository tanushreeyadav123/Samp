import React, { useContext } from 'react'
import { user1 } from './Context'
import './Style.css'
export default function Cart() {
     let {ct,setct}=useContext(user1)
  return (
    <div>
     {
           <div className="cont">
           <div className="menu"> </div>
           {ct.map((m) => {
             return (
               <>
                
                 <div class="card" style={{width: "18rem"}}>
                   <img src={m.image_url} class="card-img-top" alt="..." />
                   <div class="card-body">
                     <p class="card-title">{m.offer}</p>
                     <p class="card-text">{m.description}</p>
                     <h4>{m.price}</h4>
                     <a  class="btn btn-primary rc" onClick={()=>{setct(ct.filter((fl) => fl.id !== m.id))}}>REMOVE FROM CART</a>


                     
                     {/* {
                         ct.includes(m)?( <a href="#" class="btn btn-primary" onClick={()=>{setct([...ct,m])}}>ADD TO CART</a>):( <a href="#" class="btn btn-primary" onClick={()=>{setct([...ct,m])}}>REMOVE FROM CART</a>)
                     } */}
                   </div>
                 </div>
               </>
             );
           })}
         </div>
     }
    </div>
  )
}
