import React from "react";
import "./Homepage.css";
import Header from "../header/Header";
import Slider from "../image_slider/slider";
import Collections from "../collections/Collections";
import Footer from "../footer/Footer";

function Homepage() {
  return (
    <>
      <Header />
      <main class="main">
        <Slider /> <br/>
        <Collections />
      </main>
      <Footer />
    </>
  );
}

export default Homepage;
