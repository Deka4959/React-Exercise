import { useState } from "react";

function ProductCard() {
  const [cart, setCart] = useState([]);
  const [laptopName, setLaptopName] = useState("");
  const [price, setPrice] = useState("");

  const eventButton = () => {
    const newProduct = {
      id: crypto.randomUUID(),
      laptop: laptopName,
      price: price,
      quantity: 1,
    };

    setCart([...cart, newProduct]);

    setLaptopName("");
    setPrice("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter laptop name"
        value={laptopName}
        onChange={(e) => setLaptopName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={eventButton}>🛒 Add to Cart</button>

      {cart.map((product) => (
        <div key={product.id}>
          <p>Laptop: {product.laptop}</p>
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default ProductCard;