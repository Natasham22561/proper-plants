import { useState } from "react";
import { plants } from "./data";
import PlantsList from "./components/Plants/PlantsList";
import Cart from "./components/Cart";

// Import the global CSS here
import "./index.css";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === plant.id);
      if (exists) {
        return prev.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...plant, quantity: 1 }];
    });
  }

  function incrementQuantity(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decrementQuantity(id) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <div className="app">
      <h1>🪴 Proper Plants</h1>
      <PlantsList plants={plants} addToCart={addToCart} />
      <Cart
        cart={cart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
    </div>
  );
}

export default App;