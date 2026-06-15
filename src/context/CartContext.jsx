import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const [isCartOpen, setIsCartOpen] =
    useState(false);

  const removeFromCart = (index) => {
    const updatedCart = cart.filter(
      (_, i) => i !== index
    );

    setCart(updatedCart);
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,

        isCartOpen,
        setIsCartOpen,

        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;