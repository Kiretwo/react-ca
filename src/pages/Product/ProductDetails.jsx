import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../components/CartContext";
import "./ProductDetails.scss";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const { dispatch } = useCart(); // Access cart actions
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://v2.api.noroff.dev/online-shop/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data.data);
        console.log("Fetched product:", data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product || !product.image) return <p>Product not found</p>; // Prevents "undefined" error

  return (
    <main className="container">
      <section className="product-details">
        {/* Product Image */}
        <div className="image-wrapper">
          <img
            src={product.image.url}
            alt={product.image.alt || product.title}
          />
        </div>

        {/* Product Info */}
        <div className="product-info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>

          {/* Price Display */}
          <p className="price">
            {product.discountedPrice < product.price ? (
              <>
                <span className="discounted">
                  {product.discountedPrice} NOK
                </span>
                <span className="original">{product.price} NOK</span>
              </>
            ) : (
              <span>{product.price} NOK</span>
            )}
          </p>

          {/* Product Tags */}
          <div className="tags">
            {product.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Rating */}
          <div className="rating">
            <strong>Rating:</strong> {product.rating} ⭐
          </div>

          {/* Add to Cart Button */}
          <button className="add-to-cart-btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>

        {/* Product Reviews */}
        <div className="reviews">
          <h2>Customer Reviews</h2>
          {product.reviews.length > 0 ? (
            product.reviews.map((review) => (
              <div key={review.id} className="review">
                <strong>{review.username}</strong> - ⭐ {review.rating}
                <p>{review.description}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
