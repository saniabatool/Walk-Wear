import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Cart Drawer State
  const [isCartOpen, setIsCartOpen] =
    useState(false);

  const removeFromCart = (index) => {
    const updatedCart = cart.filter(
      (_, i) => i !== index
    );

    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,

        isCartOpen,
        setIsCartOpen,

        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
