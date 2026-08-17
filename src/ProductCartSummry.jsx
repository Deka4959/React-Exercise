import { useContext } from "react";
import { CartContext } from "./CartContext";

function ProductCartSummary() {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0);

  return (
    <>
      <h2>Cart Summary</h2>
      <p>Total Items: {cart.length}</p>

      <p>Total Price: ${totalPrice.toFixed(2)}</p>

      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductCartSummary;