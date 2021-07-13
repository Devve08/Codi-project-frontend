import React, { useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Rating from "../components/rating/Rating";
import "./Cart.css";

export default function Cart() {
  const { value2 } = React.useContext(ProductContext);
  const [cart, setCart] = value2;
  const [quantity, setQuantity] = useState([]);

  const removeFromCart = (item) => {
    setCart(cart.filter((product) => product._id !== item._id));
  };

  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
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
                  <li className="price_li">
                    <span>Price :</span>
                    <span className="cart_price">
                      {formatter.format(item.price)}
                    </span>
                  </li>
                  
                    <li className="quantity_size">
                      <div>
                        <span>Q:</span>
                        <select
                          value={quantity[index]}
                      
                          onChange={(e) => setQuantity(e.target.value)}
              
                        >
                           {console.log(quantity[index])}
                          {[...Array(item.stock).keys()].map((numProduct) => (
                          
                            <option key={numProduct + 1} value={numProduct + 1}>
                              {numProduct + 1}
                             
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <span>S:</span>
                        <select>
                          <option value="small">S</option>
                          <option value="medium">M</option>
                          <option value="large">L</option>
                        </select>
                      </div>
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
