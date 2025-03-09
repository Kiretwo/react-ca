import { useState, useEffect } from "react";
import "../../App.scss";
import "./Home.scss";
import ProductCard from "../../components/ProductCard";
import useFetchProducts from "../../hooks/useFetchProducts";

const Home = () => {
  const { products } = useFetchProducts(); // Fetches products from custom API hook

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
