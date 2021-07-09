import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

export default function Cart() {
  const [products, setProducts] = useContext(ProductContext);
  console.log(products);
  return (
    <div>
      {products.map((item) => <div>{item.name}</div>)}
    </div>
  );
}
