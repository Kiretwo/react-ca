import { useState, useEffect } from "react";
import "../../App.scss";
import "./Home.scss";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://v2.api.noroff.dev/online-shop")
      .then((response) => response.json())
      .then((data) => setProducts(data.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <main className="container">
      <section className="home">
        <h1>Welcome to My React App</h1>
        <div className="grid cols-3">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="card">
                <img
                  src={product.image.url}
                  alt={product.image.alt || product.title}
                />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
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
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
