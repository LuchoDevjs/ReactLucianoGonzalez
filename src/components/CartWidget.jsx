import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "./context/CartContext";

function CartWidget() {
  const { getItemQty } = useContext(CartContext);

  return (
    <>
      <ShoppingCartIcon />
      <span>{getItemQty() > 0 && getItemQty()}</span>
    </>
  );
}

export default CartWidget;
