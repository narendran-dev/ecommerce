import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../context/category.context";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContainer, Title } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const { Categories } = useContext(CategoriesContext);
  const [products, setProducts] = useState(Categories[category]);

  useEffect(() => {
    setProducts(Categories[category]);
  }, [category, Categories]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
