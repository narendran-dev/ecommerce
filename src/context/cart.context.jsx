import { createContext, useEffect, useState } from "react";

const addCartItems = (cartItems, Item) => {
  const IsCartItemexist = cartItems.find((o) => o.id === Item.id);
  if (IsCartItemexist) {
    IsCartItemexist.quantity += 1;
    return [...cartItems];
  }
  return [{ ...Item, quantity: 1 }, ...cartItems];
};

const removeCartItems = (cartItems, Item) => {
  const IsCartItemexist = cartItems.find((o) => o.id === Item.id);
  if (IsCartItemexist.quantity === 1) {
    return cartItems.filter((o) => o.id !== Item.id);
  }
  IsCartItemexist.quantity -= 1;
  return [...cartItems];
};
const DeleteCartItems = (cartItems, Item) => {
  return cartItems.filter((o) => o.id !== Item.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  Total: 0,
  removetemToCart: () => {},
  deleteItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCaritems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [Total, SetTotal] = useState(0);
  const addItemToCart = (item) => {
    setCaritems(addCartItems(cartItems, item));
  };
  const removetemToCart = (item) => {
    setCaritems(removeCartItems(cartItems, item));
  };
  const deleteItemFromCart = (item) => {
    setCaritems(DeleteCartItems(cartItems, item));
  };
  useEffect(() => {
    const newCartCOunt = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCOunt);
    const NewTotal = cartItems.reduce((total, cartItem) => {
      return total + cartItem.price * cartItem.quantity;
    }, 0);
    SetTotal(NewTotal);
  }, [cartItems]);
  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen: () => setIsCartOpen(!isCartOpen),
        addItemToCart,
        removetemToCart,
        cartItems,
        cartCount,
        deleteItemFromCart,
        Total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
