import { useContext } from "react";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.style.scss";
import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";
const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const HandleCheckoutCLick = () => {
    setIsCartOpen();
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Button onClick={HandleCheckoutCLick}>GO TO CHECKOUT</Button>
    </div>
  );
};
export default CartDropdown;
