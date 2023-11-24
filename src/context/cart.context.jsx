import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen: () => setIsCartOpen(!isCartOpen),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
