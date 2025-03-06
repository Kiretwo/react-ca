import { useState, useEffect } from "react";
import "../../App.scss";
import "./Home.scss";
import ProductCard from "../../components/ProductCard";

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
              <ProductCard key={product.id} product={product} />
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
