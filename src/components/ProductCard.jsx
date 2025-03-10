import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { dispatch } = useCart(); // Access cart actions

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="card">
      <Link to={`/product/${product.id}`} className="product-link">
        <img src={product.image.url} alt={product.image.alt || product.title} />
        <h2 className="card-content">{product.title}</h2>
      </Link>
      <p className="card-content">{product.description}</p>
      <p className="price card-content">
        {product.discountedPrice < product.price ? (
          <>
            <span className="discounted">{product.discountedPrice} NOK</span>
            <span className="original">{product.price} NOK</span>
          </>
        ) : (
          <span>{product.price} NOK</span>
        )}
      </p>
      <button className="add-to-cart-btn card-content" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
