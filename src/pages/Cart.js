import React, { useEffect, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Rating from "../components/rating/Rating";
import ShopHeader from "../components/card/shopheader";
import "./Cart.css";

export default function Cart() {
  const { value1, value2 } = React.useContext(ProductContext);
  const [products, setProducts] = value1;
  const [cart, setCart] = value2;

  const removeFromCart = (item) => {
    setCart(cart.filter((product) => product !== item));
  };

  useEffect(() => {
    const cartForm = JSON.parse(localStorage.getItem("cart"));
    setCart(cartForm);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, []);
  return (
    <div className="cart_section">
      <>
        {cart.map((item, index) => (
          <>
            <div className="cart_screen--container">
              <div className="cart_screen--image">
                <img src={item.image} alt="" />
              </div>
              <div className="cart_screen--details">
                <ul className="cart--details">
                  <li>{item.name}</li>
                  <li className="reviews">
                    <span>
                      <Rating rating={item.rating} />
                    </span>
                  </li>
                  <li>
                    <span>Price :</span>
                    <span className="cart_price">${item.price}</span>
                  </li>
                  <li>
                    <div>
                      <button
                        onClick={() => removeFromCart(item)}
                        className="add_to_cart_btn"
                      >
                        <i class="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ))}
      </>
    </div>
  );
}
