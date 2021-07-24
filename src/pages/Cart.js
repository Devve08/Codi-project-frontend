import React, { useState, useEffect } from "react";
import { ProductContext, ProductProvider } from "../contexts/ProductContext";
import Rating from "../components/rating/Rating";
import "./Cart.css";
import axios from "axios";

export default function Cart() {
  const { value2 } = React.useContext(ProductContext);
  const [cart, setCart] = value2;
  const { value1 } = React.useContext(ProductContext);
  const [products, setProducts] = value1;
  const [quantity, setQuantity] = useState([]);
  const [count, setCount] = useState(null);

  console.log(cart);
  const removeFromCart = (item) => {
    setCart(
      cart.map((cartItem, index) => {
        if (cartItem.product_id === item._id) {
          cart.splice(index, 1);
        }
      }),
      ...cart
    );
    let localToken = localStorage.getItem("token");
    axios
      .put("http://localhost:4000/user/cartremove", {
        token: localToken,
        product_id: item._id,
      })
      .then((res) => {
        console.log({ putResponse: res });
      })
      .catch();
    setCount(count + 1);
  };
  console.log(cart);
  useEffect(() => {}, [count]);

  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="cart_section">
      <ProductProvider>
        {cart &&
          cart.map((item) => {
            let test2 = item.product_id;

            return products.map((item, index) => {
              if (test2 === item._id) {
                return (
                  <>
                    {console.log(item.image)}
                    <div className="cart_screen--container">
                      <div className="cart_screen--image">
                        {console.log(item.image)}
                        <img src={item.image} alt="" />
                      </div>
                      <div className="cart_screen--details">
                        <ul className="cart--details">
                          <li>{products[index].name}</li>
                          <li className="reviews">
                            <span>
                              <Rating rating={products[index].rating} />
                            </span>
                          </li>
                          <li className="price_li">
                            <span>Price :</span>
                            <span className="cart_price">
                              {formatter.format(products[index].price)}
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
                                {[...Array(item.stock).keys()].map(
                                  (numProduct) => (
                                    <option
                                      key={numProduct + 1}
                                      value={numProduct + 1}
                                    >
                                      {numProduct + 1}
                                    </option>
                                  )
                                )}
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
                );
              }
            });
          })}
      </ProductProvider>
    </div>
  );
}
