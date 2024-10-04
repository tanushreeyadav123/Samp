import React from 'react'

export default function Men_comp1(props) {
  return (
       <div className="box1">
      <div className="box2_l"> 
          <h2>{props.h1}</h2> 
          <p>{props.p}</p>
      </div>
      <div className="box2_r">
          <img src={props.img1} alt="" />
      </div>
    </div>
  )
}
