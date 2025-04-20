import React from "react";

// Display the Card and required essential info
const ProductCard = ({prod}) => {
  // Extracting the data from the product
  const {title, description, price, brand, category, rating, thumbnail} = prod;

  return (
    <div className="product-card">
      <img src={thumbnail} alt={title} className="product-img" loading="lazy" />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Brand: {brand}</p>
      <p>Rating: {rating}</p>
      <p>Category: {category}</p>
    </div>
  )
}

export default ProductCard;