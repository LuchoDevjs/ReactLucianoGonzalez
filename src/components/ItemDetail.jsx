import React from "react";
import { Button } from "@mui/material";

function ItemDetail({ item }) {
  const { model, image, price, description } = item;

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Detalle del Producto</h2>
      <div className="itemDetail">
        <img src={image} className="itemDetail__img" alt="" />
        <div className="itemDetail__p">
          <h1>{model}</h1>
          <h3>{description}</h3>
          <h2>{price}</h2>
          <Button
            disableElevation
            style={{ backgroundColor: "white", color: "rgb(0 37 177)" }}
          >
            Comprar
          </Button>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
