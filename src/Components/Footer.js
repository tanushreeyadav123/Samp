import React from 'react';
import './Footer.css';
import im1 from '../images/google-pay.png'
export default function Footer() {
  return (
    <div>
      <div className="footer_2">
        <div className="f2_l">
          <h3>TANUSHREE</h3>
          <h5 style={{ textAlign: 'left', marginLeft: '50px' }}>contact</h5>
          <ul>
            <li><span>ADDRESS:</span> 172 Main Street, Cityville, India 400406</li>
            <li><span>PHONE:</span> +91_5476249854</li>
            <li><span>HOURS:</span> 10:00 to 8:00 Mon-Sat</li>
          </ul>

          <h3>FOLLOW US</h3>
          <ul id="fs">
            <li ><i className="bi bi-instagram"></i></li>
            <li style={{marginLeft:"50px"}}><i className="fa-brands fa-twitter"></i></li>
            <li><i className="fa-brands fa-facebook"></i></li>
            <li><i className="fa-brands fa-pinterest"></i></li>
          </ul>
        </div>
        <div className="f2_r">
          <div className="f2_r_1">
            <h3>Customer Policy</h3>
            <ul>
              <li>Terms Of Use</li>
              <li>Track Orders</li>
              <li>Shipping</li>
              <li>Cancellation Returns</li>
              <li>Privacy Policy</li>
              <li>Grievance Officer</li>
            </ul>
          </div>
          <div className="f2_r_1">
            <h3>USEFUL LINKS</h3>
            <ul>
              <li>Blog</li>
              <li>Careers</li>
              <li>Site Map</li>
              <li>Corporate Information</li>
              <li>Whitehat</li>
              <li>CUSTOMER POLICIES</li>
            </ul>
          </div>
          <div className="f2_r_1" id="f2_i">
            <h3>Install App</h3>
            <p style={{ color: 'black' }}>From App Store Or Google Play</p>
            <div className="image_div">
              <img src={im1} alt=""/>
            </div>
          </div>
        </div>
      </div>

      <p style={{ color: 'black' }}>© 2024-Tanushree_HTML_CSS ecommerce Template</p>
    </div>
  );
}
