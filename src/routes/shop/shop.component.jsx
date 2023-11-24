import { useContext } from "react";
import "./shop.style.scss";
import { ProductContext } from "../../context/product.context";
import ProductCard from "../../components/product-card/product-card.component";
const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
