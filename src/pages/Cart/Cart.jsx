import { useCart } from "../../components/CartContext";

const Cart = () => {
  const { cart, dispatch } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.discountedPrice * item.quantity,
    0
  );

  return (
    <main className="container">
      <section className="cart">
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <p>Price: ${item.discountedPrice}</p>

                {/* ✅ Quantity Controls */}
                <div>
                  <button
                    onClick={() =>
                      dispatch({ type: "DECREASE_QUANTITY", payload: item.id })
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch({ type: "INCREASE_QUANTITY", payload: item.id })
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                  }
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <h2>Total: ${total.toFixed(2)}</h2>
        <button>Proceed to Checkout</button>
      </section>
    </main>
  );
};

export default Cart;
