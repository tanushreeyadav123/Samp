import React, { useState } from 'react'
import Nav from './Nav'
import Cont from './Cont'
import product from './Products'
import './Men.css'
import Men_comp from './Men_comp'
import Men_comp1 from './Men_comp1'
import im1 from '../images/Fashion Style Banner.png'
import im2 from '../images/Boho Vibes _ Collection Femme (1).png'
import im3 from '../images/model1.jpeg'
import im4 from '../images/model2.png'
import im5 from '../images/download.png'
import Footer from './Footer'

export default function Men() {
  return (
    <>
    <div className='main'>
       <div className="img_cont">
          <img src={im1} alt="" />
     </div>
   
   <Men_comp1 img1={im2} h1="Our Story" p="Tanushree Clothing Site was founded with a simple vision: to create clothing that empowers individuals to feel confident and look their best. What started as a small idea has grown into a beloved brand that people trust for their everyday wardrobe needs. We believe that fashion should be accessible, inclusive, and sustainable."/>
   <Men_comp img1={im4}  h1="About Us" p="Welcome to Tanushree Clothing Site - where fashion meets passion! We are dedicated to providing high-quality, stylish, and affordable fashion for everyone. Our collections are designed to help you express your unique style and personality, no matter where life takes you."/>
   <Men_comp1 img1={im3} h1='What We Offer
' p="From casual wear to formal attire, our collections are diverse and designed with you in mind. Whether you're looking for the perfect outfit for a special occasion or everyday essentials, we've got you covered. Our designs are inspired by the latest trends, with a timeless appeal that ensures they stay relevant season after season."/>
   <Men_comp img1={im5} h1="Our Mission
" p="Our mission is to make you feel extraordinary every day. We focus on crafting pieces that are not only trendy but also comfortable and durable. We believe in the power of fashion to make a statement, and we are here to help you tell your story through our clothing."/>
  <Footer/>
    </div>
</>
  )
}
