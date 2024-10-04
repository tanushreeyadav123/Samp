import React from 'react';
import './Women.css';
import Footer from './Footer';

export default function Women() {
  return (
    <div>
      <div className="contactus">
        <div className="row">
          <div className="contact-col">
          <div>
  <i className="fa-solid fa-star"></i>
  <span>
    <h5>Quality Fashion</h5>
    <p>We offer high-quality, stylish clothing for all occasions. Discover the latest trends and timeless pieces at Tanushree Clothing Site.</p>
  </span>
</div>

<div>
  <i className="fa-solid fa-phone"></i>
  <span>
    <p>Available 24/7</p>
    <h5>+1 9867845629</h5>
  </span>
</div>

<div>
  <i className="fa-solid fa-envelope"></i>
  <span>
    <h5>tnshr.yadav@gmail.com</h5>
    <p>Email Us Your Query</p>
  </span>
</div>

          </div>
          <div className="contact-col">
            <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="8cb7839b-b5b0-4ed4-ae35-c4326306d60f"/>
              <input type="text" name="name" placeholder="Enter your name" required />
              <input type="email" placeholder="Enter your email" name="email" required />
              <input type="text" placeholder="Enter your subject" name="subject" required />
              <textarea name="Message" cols="30" rows="8" placeholder="Message" required></textarea>
              <button type="submit" className="hero-btn red-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
