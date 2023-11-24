import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.scss";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/user.context.jsx";
import {  CategoriessProvider } from "./context/category.context.jsx";
import {  CartProvider } from "./context/cart.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriessProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriessProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
