import React, { useEffect, useState } from "react";
import "../card/Card.css";
import AllProducts from "./AllProducts";
import MessageBox from "../loading/MessageBox";
import Loading from "../loading/Loading";

export default function MenCard() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
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
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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
