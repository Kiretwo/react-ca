import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import useFetchProducts from "../../hooks/useFetchProducts";
import styles from "./Header.module.scss";

const Header = () => {
  const { cart } = useCart();
  const { products } = useFetchProducts(); // Fetches products from custom API hook
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Filter products based on search input
  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm, products]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        {/* Dropdown Suggestions */}
        {filteredProducts.length > 0 && (
          <ul className={styles.searchDropdown}>
            {filteredProducts.slice(0, 5).map((product) => (
              <li key={product.id}>
                <Link
                  to={`/product/${product.id}`}
                  onClick={() => setSearchTerm("")}
                >
                  {product.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
