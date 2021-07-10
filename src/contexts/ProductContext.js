import { createContext, useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import MessageBox from "../components/loading/MessageBox";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [cart, setCart]=useState([])

  const fetchData = () => {
    axios
      .get("http://localhost:4000/product")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        setError({ message: error.message });
      });
  };
 

 
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {error ? (
        <MessageBox error={error.message} />
      ) : (
        <ProductContext.Provider value={{value1:[products, setProducts], value2: [cart, setCart]}}>
          {props.children}
        </ProductContext.Provider>
      )}
    </>
  );
};
