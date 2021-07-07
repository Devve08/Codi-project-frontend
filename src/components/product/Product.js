import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Product.css";
import ShopHeader from "../card/shopheader";
import Rating from "../rating/Rating";
import Loading from "../loading/Loading";
import MessageBox from "../loading/MessageBox";

export default function Product(props) {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(null);
  const [cart, setCart]= useState([])

  useEffect(() => {
    const fetchData = () => {
      try {
        setLoading(true);
        fetch("http://localhost:4000/product")
          .then((response) => response.json())
          .then((result) => {
            setLoading(false);
            setProducts(result.products);
          });
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const addToCart =(product)=> {
      setCart([...cart, product])
      console.log(cart)
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox error={error} />
      ) : (
        <>
          {products &&
            products
              .filter((item) => item._id === id)
              .map((item, index) => (
                <>
                  <ShopHeader key={index} title={item.category} />
                  <div className="product_screen--container">
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
                          <div>Status :</div>
                          <div>
                            {item.stock > 0 ? (
                              <span className="success"> In Stock</span>
                            ) : (
                              <span className="fail">Unavailable</span>
                            )}
                          </div>
                        </li>
                        {item.stock > 0 ? (
                          <li>
                            <div>
                              <select
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                              >
                                {
                                  [...Array(item.stock).keys()].map(product => (
                                    <option key={product+1} value={product+1}>{product + 1}</option>
                                  ))
                                }
                              </select>
                            </div>
                            <div>
                              <button onClick={addToCart} className="add_to_cart_btn">
                                Add to <i className="far fa-shopping-cart"></i>
                              </button>
                            </div>
                          </li>
                        ) : null}
                      </ul>
                    </div>
                  </div>
                </>
              ))}
        </>
      )}
    </>
  );
}
