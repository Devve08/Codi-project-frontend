import React from "react";
import "./Homepage.css";
import Slider from "../components/image_slider/slider";
import Collections from "../components/collections/Collections";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

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
