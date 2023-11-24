import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/crown.svg?react";
import "./navigation.style.scss";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { SigOutAuthUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {!currentUser ? (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          ) : (
            <span onClick={SigOutAuthUser} className="nav-link">
              SIGN OUT
            </span>
          )}
          <CartIcon
           
          />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
