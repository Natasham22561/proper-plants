import "./plants.css";

const PlantDetails = ({ plants, setCart }) => {
  const handleAddToCart = (plant) => {
    setCart((currentCart) => {
      // set a variable to see if the item clicked is in the state
      const existingItem = currentCart.find((item) => item.id === plant.id);
      // if it already in the cart.....
      if (existingItem) {
        // map a new array from the previous state (currentCart)
        return currentCart.map((item) => {
          // and if it's the same plant we just added
          if (item.id === plant.id) {
            // return with a copy of array with updated quantity
            return { ...item, quantity: item.quantity + 1 };
          }
          /* if during mapping, if the new item is not the same, don't touch anything so it 
           just return in the new object so it continues mapping to find one that is */
          return item;
        });
      }
      // if the clicked item is not in the cart, return the currentCart(array) and add new item (object)
      // to the cart and set the quantity to 1
      return [...currentCart, { ...plant, quantity: 1 }];
    });
  };

  return (
     <div>
      {plants.map((plant) => (
        <section className="plant-details" key={plant.id}>
        <figure>{plant.image}</figure>
          <p>{plant.name}</p>
          <button onClick={() => handleAddToCart(plant)}>Add to cart</button>
        </section>
      ))}
    </div>
  );
};

export default PlantDetails;