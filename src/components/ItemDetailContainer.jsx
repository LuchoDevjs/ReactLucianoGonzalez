import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("../../productos.json")
      .then((res) => res.json())
      .then((data) =>
        setItem(data.productos.find((producto) => producto.id === id))
      )
      .catch((error) => console.error("Error", error));
  }, [id]);
  return item && <ItemDetail item={item} />;
}

export default ItemDetailContainer;
