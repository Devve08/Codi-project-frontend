// import React from "react";
// import "./Contact.css";
// import Marquee from "react-fast-marquee";

// export default function Contact() {
//   // Javascript codes here

//   var today = new Date();

//   return (
//     <div class="container">
//       {/* Contact Us */}
//       <div class="item1">
//         {/* First Marquee */}
//         <Marquee direction="right" id="marq1" speed="20">
//           Welcome to Brands Wear, We'd Love to hear from you
//         </Marquee>
//         {/* Second Marquee */}
//         <Marquee direction="right" speed="50" id="marq2">
//           Aramoun main road, Al-Houssam Building
//         </Marquee>

//         {/* Third Marquee */}
//         <Marquee direction="right" speed="50" id="marq3">
//           Telephone: 05811715 | Mobile: 71195396.
//         </Marquee>

//         <Marquee behavior="scroll" speed="20" direction="right">
//           <i>
//             <font color="blue">
//               {"Current Local Time:  " + today}
//               <strong>
//                 <span id="time"></span>
//               </strong>
//             </font>
//           </i>
//         </Marquee>
//       </div>
//       <div class="item2">
//         <h2> Email Us: </h2>
//         <form>
//           {/* <p>Enter your full name:</p> */} <br />
//           <input type="text" placeholder="Enter your full name " />
//           {/* <p>Enter your email:</p> */} <br />
//           <input type="text" placeholder="Enter your email " />
//           <br />
//           <input type="text" placeholder="Subject" />
//           {/* <p>Message</p> */} <br />
//           <textarea
//             placeholder="Write your message here"
//             cols="30"
//             rows="10"
//           ></textarea>
//           <br />
//           <button class="button button1">Send</button>
//         </form>
//       </div>

//       <div class="item3">
//         <h2>Locate Us: </h2>
//         {/* <p>Aramoun Main Road, Near Wissam Cell, Khalaf Building. </p> */}
//         <h5>Directions on Google Maps: </h5>
//         <iframe
//           title="Google Maps"
//           src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d53051.004484706646!2d35.4513010660179!3d33.79455995852539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m3!3m2!1d33.794493599999996!2d35.4864064!4m0!5e0!3m2!1sen!2slb!4v1625565230404!5m2!1sen!2slb"
//           width="500"
//           height="450"
//           allowfullscreen=""
//           loading="lazy"
//         >
//           {" "}
//         </iframe>
//       </div>
//     </div>
//   );
// }
