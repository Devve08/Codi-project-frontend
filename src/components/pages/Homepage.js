import React from "react";
import "./Homepage.css";
import Header from "../header/Header";
import Slider from "../image_slider/slider";

function Homepage() {
  return (
    <>
      <Header />
      <main class="main">
        <Slider />
        {/* <Card /> */}
        {/* Cards Section */}
        <div></div>
      </main>
    </>
  );
}

export default Homepage;
