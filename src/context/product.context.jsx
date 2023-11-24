import { createContext, useState } from "react";

import PRODUCTS from "../shop-data.json";

export const ProductContext = createContext({});

export const ProductsProvider = ({ children }) => {
  const [products] = useState(PRODUCTS);
  return (
    <ProductContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
