import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  Categories: {},
});

export const CategoriessProvider = ({ children }) => {
  const [Categories, setCategoriess] = useState({});

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriess(categoryMap);
    };
    getCategories();
  }, []);
  return (
    <CategoriesContext.Provider
      value={{
        Categories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
