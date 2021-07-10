import React from "react";
import "./Contact.css";


export default function Contact() {
  // Javascript codes here

  return (
      <>
      <div class="item2">
        <h2> Email Us: </h2>
        <form>
          {/* <p>Enter your full name:</p> */} <br />
          <input type="text" placeholder="Enter your full name " />
          {/* <p>Enter your email:</p> */} <br />
          <input type="text" placeholder="Enter your email " />
          <br />
          <input type="text" placeholder="Subject" />
          {/* <p>Message</p> */} <br />
          <textarea
            placeholder="Write your message here"
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <button class="button button1">Send</button>
        </form>
      </div>

      <div class="item3">
        <h2>Locate Us: </h2>
        {/* <p>Aramoun Main Road, Near Wissam Cell, Khalaf Building. </p> */}
        <h5>Directions on Google Maps: </h5>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d53051.004484706646!2d35.4513010660179!3d33.79455995852539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m3!3m2!1d33.794493599999996!2d35.4864064!4m0!5e0!3m2!1sen!2slb!4v1625565230404!5m2!1sen!2slb"
          width="500"
          height="450"
          allowfullscreen=""
          loading="lazy"
        >
          {" "}
        </iframe>
      </div>
    
    </>
  );
}
