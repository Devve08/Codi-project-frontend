import React from "react";
import "./Collections.css";
import CollectionOne from "./Collection-one";
import hmc from "../../images/hm-outfit.jpg"
import jack from "../../images/jack-outfit.jpg"
import CollectionFour from "./CollectionFour";
import CollectionTwo from "./CollectionTwo";
import CollectionThree from "./CollectionThree";
import Access from '../../images/acce-outfit.jpg';
import adidas from '../../images/adidas-outfit.jpg'


export default function Collections() {


  return (
      <div className="collections">
        <CollectionOne image={hmc} />
        <CollectionTwo image={Access} />
        <CollectionThree shoes={adidas} />
        <CollectionFour Four={jack} />
      </div>
  );
}
