import React, { useEffect, useState } from "react";
import "../card/Card.css";
import AllProducts from "./AllProducts";
import MessageBox from "../loading/MessageBox";
import Loading from "../loading/Loading";
import axios from "axios";

export default function MenCard() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true)
    axios
    .get("http://localhost:4000/product")
    .then((res) => {
      setError("")
      setProducts(res.data)
      setLoading(false)
    })
    .catch((error) => {
      setProducts("");
      setError(error.message);
      setLoading(false)
    })
  }
  
  useEffect(() => {
    fetchData();
  },[])
  

  return (
    
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox error={error}  />
      ) : (
        <>
          {products && products.map((product) => {
            if (product.sex === "male") {
              return <AllProducts product={product} />;
            }
            return null;
          })}
        </>
      )}
    </>
  );
}
