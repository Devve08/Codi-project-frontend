import React from "react";
import "./Homepage.css";
import Slider from "../components/image_slider/slider";
import Collections from "../components/collections/Collections";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Homepage() {
  return (
    <>
      <Header />
      <main className="main">
        <Slider /> <br />
        <Collections />
      </main>
      <Footer />
    </>
  );
}

export default Homepage;
