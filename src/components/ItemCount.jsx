import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function ItemCount({ inicial, onAdd, cantidad }) {
  const [count, setCount] = useState(inicial);

  const sumarStock = () => {
    if (count < cantidad) {
      setCount(count + 1);
    }
  };

  const restarStock = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="contador">
        <Stack direction="row" spacing={2}>
          <Button
            onClick={sumarStock}
            variant="contained"
            style={{ background: "#000000ba", color: "white" }}
          >
            +
          </Button>
          <h2 style={{ display: "flex", justifyContent: "center" }}>{count}</h2>
          <Button
            onClick={restarStock}
            variant="outlined"
            style={{ background: "#000000ba", color: "white" }}
          >
            -
          </Button>
          <Button
            onClick={() => {
              onAdd(count);
            }}
            style={{ background: "#000000ba", color: "white" }}
          >
            Agregar al carrito
          </Button>
        </Stack>
      </div>
    </>
  );
}
