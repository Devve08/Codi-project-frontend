import React, { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import MessageBox from "../loading/MessageBox";
import AllProducts from "./AllProducts";

export default function WomenCard() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = () => {
      try {
        setLoading(true)
        fetch("http://localhost:4000/product")
          .then((response) => response.json())
          .then((result) => {
            setLoading(false)
            setProducts(result.products);
          });
      } catch (error) {
        setError(error.message);
        setLoading(false)
      }
    };
    fetchData();
  }, []);

  return (
    <>
    {loading? <Loading />
    :
    error? <MessageBox />
    :<>
    {products.map(product =>  {
        if(product.sex === "female"){
        return<AllProducts product={product} />
        }
        return null
      })}
    </>
    }
      
      
    </>
  );
}
