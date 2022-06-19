import React from "react";
import Item from "./Item";
import Pagination from "@mui/material/Pagination";

function ItemListt({ personajes }) {
  return (
    <>
      <div className="ListaPersonajes">
        {personajes.map((personajes) => (
          <Item key={personajes.id} personaje={personajes} />
        ))}
      </div>
      <Pagination count={5} className="pagination" />
    </>
  );
}

export default ItemListt;
