import { useContext } from "react";
import { CategoriesContext } from "../../context/category.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { Categories } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(Categories).map((title) => {
        const products = Categories[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
