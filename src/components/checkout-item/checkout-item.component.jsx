import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { removetemToCart, addItemToCart, deleteItemFromCart } =
    useContext(CartContext);
  const HandleRemoveCart = () => removetemToCart(cartItem);
  const HandleIncreaseQty = () => addItemToCart(cartItem);
  const HandleDecreaseQty = () => deleteItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={HandleDecreaseQty}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={HandleIncreaseQty}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={HandleRemoveCart}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
