import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { ProductContext } from "../../contexts/ProductContext";
import Rating from "../rating/Rating";

export default function AdminProducts() {
  const { value1 } = React.useContext(ProductContext);
  const [products, setProducts] = value1;
  const [error, setError] = useState(false);

  const fetchData = () => {
    axios
      .get("http://localhost:4000/product")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        setError({ message: error.message });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {products.map((item) => {
        return (
          <div className="admin--product--view">
            <img src={item.image} alt="" />
            <div>
                <ul>
                    <li>{item.name}</li>
                    <li>{item.sex}</li>
                    <li> ${item.price}</li>
                    <li> <Rating rating={item.rating} /></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>  {item.size}</li>
                    <li> {item.brand}</li>
                    <li> {item.category}</li>
                    <li>{item.description}</li>
                </ul>
            </div>
            
            
            
            
           
           
          
           
          </div>
        );
      })}
    </div>
  );
}
