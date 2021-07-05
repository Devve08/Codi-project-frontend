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
                  <li>
                    {" "}
                    <span>{item.brand}</span> Brand
                  </li>
                  <li>{item.description}</li>
                  <li className="reviews">
                    <span>
                      <Rating rating={item.rating} />
                    </span>
                    <span className="num"> {item.numReviews} reviews</span>
                  </li>
                  <li>
                    <span>Price :</span> 
                    <span className="price">${item.price}</span>
                  </li>
                  <li>
                    <div>Status :</div>
                    <div>
                      {item.stock > 0 ? (
                        <span className="success"> In Stock</span>
                      ) : (
                        <span class="fail">Unavailable</span>
                      )}
                    </div>
                  </li>
                  <li>
                    <div>
                      <select name="" id="">
                        <option value="">{item.stock}</option>
                      </select>
                    </div>
                    <div>
                      <button className="add_to_cart_btn">Add to <i class="far fa-shopping-cart"></i></button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ))}
    </>
  );
}
