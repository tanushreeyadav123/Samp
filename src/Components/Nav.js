import React, { useContext } from 'react'
import './Style.css'
import image1 from '../images/music.png';
import image2 from '../images/tag.png';
import { Link } from 'react-router-dom';
import { user1 } from './Context';
export default function Nav() {
  // let {ct,setct}=useContext(user1)
  let {ct,setct}=useContext(user1)
  return (
    <div>
     <div className="nav">
      <span><Link to="/"><img src={image2} alt="not found"/></Link></span>
      <span id='heading'><p>Tanushree is brave</p></span>
      <ul>
       <Link to="/"><li>machi</li></Link>
       <Link to="/men"><li>gai</li></Link>
       <Link to='/women'><li>peacock</li></Link>
       {/* <Link to='/kids'><li>DETAILS</li></Link> */}
       <Link to='/cart'><li><i class="fa-solid fa-cart-shopping"></i></li> <span id='ci'>{ct.length}</span> </Link>
      </ul>

      {/* <span id='search'><input type="search" name="" id="" /></span> */}
     
     </div>
    </div>
  )
}
