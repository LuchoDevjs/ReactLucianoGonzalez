import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";

function Cart() {
  const { cart, getItemPrice, clearCart, removeItem } = useContext(CartContext);

  return (
    <>
      {cart.length > 0 ? (
        <div>
          <h2>motrame todo</h2>
        </div>
      ) : (
        <div className="cartVacio">
          <h1>Tu carrito está vacío</h1>
          <div className="carVacioP">
            <p>¿No sabes que comprar?</p>
            <p>¡Miles de productos te esperan!</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
