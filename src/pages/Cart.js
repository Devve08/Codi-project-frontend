import React from "react";
import { ProductContext } from "../contexts/ProductContext";
import Rating from "../components/rating/Rating";
import ShopHeader from "../components/card/shopheader";




export default function Cart() {
  const { value1, value2 } = React.useContext(ProductContext);
  const [products, setProducts] = value1
  const [cart, setCart] = value2

  const removeFromCart = (item) => {
    setCart(cart.filter(product => product !== item))
  }
 
  return (
    <div>
      <>
          {
            cart
              .map((item, index) => (
                <>
                  <ShopHeader title={" Shopping cart"} />
                  <div className="product_screen--container">
                    <div className="product_screen--image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="product_screen--details">
                    
                      <ul className="screen--details">
                        <li>{products.name}</li>
                        <li>
                          {" "}
                          <span>{item.brand}</span> Brand
                        </li>
                        <li>{item.description}</li>
                        <li className="reviews">
                          <span>
                            <Rating rating={item.rating} />
                          </span>
                          <span className="num">
                            {" "}
                            {item.numReviews} reviews
                          </span>
                        </li>
                        <li>
                          <span>Price :</span>
                          <span className="price">${item.price}</span>
                        </li>
                        <li>
                            <div>
                              <button
                                onClick={()=>removeFromCart(item)}
                                className="add_to_cart_btn"
                              >
                               Remove <i className="far fa-shopping-cart"></i>
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
