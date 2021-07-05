import React from "react";
import data from "../../data";
import { useParams } from "react-router";
import "./Product.css";
import ShopHeader from "../card/shopheader";
import Rating from "../rating/Rating";

export default function Product() {
  const { id } = useParams();

  return (
    <>
      {data.products
        .filter((item) => parseInt(item.id) === parseInt(id))
        .map((item, index) => (
            <>
            <ShopHeader title={item.category} />
          <div className="product_screen--container" key={index}>
            <div className="product_screen--image">
              <img src={item.image} alt="" />
            </div>
            <div className="product_screen--details">
              <ul className="screen--details">
                <li>{item.name}</li>
                <li> <span>{item.brand}</span> Brand</li>
                <li>{item.description}</li>
                <li className="reviews">
                  <span><Rating rating={item.rating} /></span>
                  <span className="num"> {item.numReviews} reviews</span>
                </li>
                <li>Price: <span>${item.price}</span></li>
              </ul>
            </div>
            <div className="product_add--container">
                <button>
                    Add to cart
                </button>
            </div>
          </div>
          </>
        ))}
    </>
  );
}
