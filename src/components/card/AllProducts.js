import React from "react";
import { Link } from "react-router-dom";
import Rating from "../rating/Rating";


export default function AllProducts(props) {
  return (
            <div className="card_container">
              <div className="card_image--container">
                <Link to={`/product/${props.product._id}`}>
                  <img className="card_image" src={props.product.image} alt="" />
                  {console.log(props.product)}
                </Link>
              </div>
              <div className="card_details--container">
                <span className="product_name"> {props.product.name}</span>
                <Rating rating={props.product.rating} />
                <h4 className="product_price">${props.product.price}</h4>
              </div>
            </div>
  );
}
