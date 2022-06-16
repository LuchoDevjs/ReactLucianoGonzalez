import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer({ saludo }) {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [resultado, setResultado] = useState();

  useEffect(() => {
    fetch("../../productos.json")
      .then((res) => res.json())
      .then((res) => setProducts(res.productos))
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    if (id) {
      let filtrados = products.filter((product) => product.category === id);
      setResultado(filtrados);
    }
  }, [id, products]);

  return (
    <>
      <div>
        <h1 className="h1Saludo">{saludo}</h1>
        {resultado !== undefined ? (
          <ItemList personajes={resultado} />
        ) : (
          <ItemList personajes={products} />
        )}
      </div>
    </>
  );
}

export default ItemListContainer;
