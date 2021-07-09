import React, { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import MessageBox from "../loading/MessageBox";
import AllProducts from "./AllProducts";
import axios from "axios";

export default function WomenCard() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true)
    axios
    .get("http://localhost:4000/product")
    .then((res) => {
      console.log(res)
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
        <MessageBox error={error} />
      ) : (
        <>
          {products &&
            products.map((product) => {
              if (product.sex === "female") {
                return <AllProducts product={product} />;
              }
              return null;
            })}
        </>
      )}
    </>
  );
}
