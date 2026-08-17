import { useState } from "react";
import { CartContext } from "./CartContext";
import ProductCartSummry from "./ProductCartSummry";

function App() {
  const [cart, setCart] = useState([]);

  const addProduct = (name, price) => {
    setCart([
      ...cart,
      {
        name: name,
        price: price,
      },
    ]);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct }}>
      <h1>Product Cart</h1>

      <h2>Widget</h2>
      <p>Price: $19.99</p>

      <button onClick={() => addProduct("Widget", 19.99)}>
        Add Widget
      </button>

      <h2>Gadget</h2>
      <p>Price: $29.99</p>

      <button onClick={() => addProduct("Gadget", 29.99)}>
        Add Gadget
      </button>

      <ProductCartSummry/>
    </CartContext.Provider>
  );
}

export default App;