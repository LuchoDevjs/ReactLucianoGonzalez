import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function ItemDetail({ item }) {
  const { model, image, price, description, cantidad } = item;
  const [units, setUnit] = useState(0);

  const onAdd = (quantityToAdd) => {
    setUnit(quantityToAdd);
    alert(`Se han agregado ${quantityToAdd} productos`);
  };
  return (
    <>
      <h2 style={{ textAlign: "center", color: "#000000ba" }}>
        Detalle del Producto
      </h2>
      <div className="itemDetail">
        <img src={image} className="itemDetail__img" alt="" />
        <div className="itemDetail__p">
          <h1>{model}</h1>
          <h3>{description}</h3>
          <div className="flexPriceButton">
            <h2>{price}</h2>
          </div>
          <div>
            {units > 0 ? (
              <Link
                to={"/cart"}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                <Button style={{ background: "#000000ba", color: "white" }}>
                  {" "}
                  Terminar mi compra{" "}
                </Button>
              </Link>
            ) : (
              <ItemCount cantidad={cantidad} inicial={1} onAdd={onAdd} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
