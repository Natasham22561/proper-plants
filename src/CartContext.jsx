import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
import { createContext, useContext, useState } from "react"

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === plant.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...plant, quantity: 1}
    });
  };
  const incrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  return (<CartContext.CartProvider
    value={{ cart, addToCart, incrementQuantity, decrementQuantity }}
  >
    {children}
  </CartContext.CartProvider>
  );
};

export function useCart() {
  return useContext(CartContext);
}
     