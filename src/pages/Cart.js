import React from "react";
import { ProductContext } from "../contexts/ProductContext";
import Rating from "../components/rating/Rating";
import "./Cart.css";

export default function Cart() {
  const { value2 } = React.useContext(ProductContext);
  const [cart, setCart] = value2;

  const removeFromCart = (item) => {
    setCart(cart.filter((product) => product._id !== item._id));
  };
  return (
    <div className="cart_section">
      <>
        {cart.map((item, index) => (
          <>
          {console.log(cart)}
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
