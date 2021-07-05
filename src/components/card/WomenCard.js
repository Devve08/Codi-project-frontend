import React from "react";
import data from "../../data";
import { Link } from "react-router-dom";
import Rating from "../rating/Rating";

export default function WomenCard() {
  return (
    <>
      {data.products.map((product) => {
        if (product.sex === "female") {
          return (
            <div key={product.id} className="card_container">
              <div className="card_image--container">
                <Link to={`/product/${product.id}`}>
                <img className="card_image" src={product.image} alt="" />
                </Link>
               
              </div>
              <div className="card_details--container">
                <span className="product_name"> {product.name}</span>
                <Rating rating={product.rating} />
                <h4 className="product_price">${product.price}</h4>
              </div>
            </div>
          );
        }
        return null;
      })}
    </>
  );
}
