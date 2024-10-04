import React from 'react'
export default function Men_comp(props) {
  return (
    <div>
    
       <div className="box1">
      <div className="box1_l">  
          <img src={props.img1} alt="" />
      </div>
      <div className="box1_r">
          <h2>{props.h1}</h2>
          <p>{props.p}</p>
      </div>
     </div>
    </div>
  )
}
