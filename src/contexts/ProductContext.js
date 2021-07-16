import { createContext, useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import MessageBox from "../components/loading/MessageBox";
import Loading from "../components/loading/Loading";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    axios
      .get("http://localhost:4000/product")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError({ message: error.message });
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("cart cart");
    setCart(JSON.parse(saved));
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox error={error.message} />
      ) : (
        <ProductContext.Provider
          value={{
            value1: [products, setProducts],
            value2: [cart, setCart],
            value3: [loading, setLoading],
          }}
        >
          {props.children}
        </ProductContext.Provider>
      )}
    </>
  );
};
