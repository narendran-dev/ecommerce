import { useContext } from "react";
import CartIconSvg from "../../assets/shopping-bag.svg?react";

import "./cart-icon.style.scss";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const {  setIsCartOpen } = useContext(CartContext);
  return (
    <div
      onClick={setIsCartOpen}
      className="cart-icon-container"
    >
      <CartIconSvg className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
