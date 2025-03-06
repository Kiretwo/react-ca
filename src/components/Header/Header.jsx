import { Link } from "react-router-dom";
import { useCart } from "../CartContext";

const Header = () => {
  const { cart } = useCart();

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
