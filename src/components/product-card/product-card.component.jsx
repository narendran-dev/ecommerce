import { useContext } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { CartContext } from "../../context/cart.context";
import { Footer, Name, Price, ProductCartContainer } from "./product-card.style";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const HandleAddToCart = () => addItemToCart(product);
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        onClick={HandleAddToCart}
        buttonType={BUTTON_TYPE_CLASSES.inverted}
      >
        Add To Cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
