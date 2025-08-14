const CartItem = ({ plant, setCart }) => {
  const quantityIncrease = () => {
    setCart((currentCart) =>
      currentCart.map((item) => {
        if (item.id === plant.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };

  const quantityDecrease = () => {
    setCart((currentCart) =>
      currentCart
        .map((item) => {
          if (item.id === plant.id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="container">
      <section>
        {plant.image}
        {plant.name}
      </section>
      <main>
        <button onClick={quantityDecrease}>-</button>
        {plant.quantity}
        <button onClick={quantityIncrease}>+</button>
      </main>
    </div>
  );
};

export default CartItem;