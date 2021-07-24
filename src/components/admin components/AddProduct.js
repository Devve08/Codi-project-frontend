import React, { useState } from "react";

export default function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    image: "",
    sex: "",
    category: "",
    stock: "",
    price: "",
    rating: "",
    description: "",
    brand: "",
    size: "",
    numReviews: "",
  });

  const {
    name,
    image,
    sex,
    category,
    stock,
    price,
    rating,
    description,
    brand,
    size,
    numReviews,
  } = product;

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  

  return (
    <div className="user--form--container">
      <form
        action="http://localhost:4000/product/create"
        method="POST"
        className="user--form"
      >
        <div className="form--label--input">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            name="image"
            id="image"
            value={image}
            onChange={(e) => onInputChange(e)}
          /> 
        </div>
        <div className="form--label--input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form--label--input">
          <label htmlFor="sex">Gender</label>
          <input
            type="text"
            name="sex"
            id="sex"
            value={sex}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form--label--input">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            id="category"
            value={category}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form--label--input">
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            name="stock"
            id="stock"
            value={stock}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form--label--input">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={price}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form--label--input">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            name="rating"
            id="rating"
            value={rating}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form--label--input">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form--label--input">
          <label htmlFor="brand">Brand</label>
          <input
            type="text"
            name="brand"
            id="brand"
            value={brand}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form--label--input">
          <label htmlFor="size">Size</label>
          <input
            type="text"
            name="size"
            id="size"
            value={size}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form--label--input">
          <label htmlFor="numReviews">Number of Reviews</label>
          <input
            type="number"
            name="numReviews"
            id="numReviews"
            value={numReviews}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form--label--input">
          <button type="submit" className="form--btn">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
