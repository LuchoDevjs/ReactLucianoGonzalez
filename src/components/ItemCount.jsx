import  React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ItemCount({inicial, max, onAdd}) {
     const [count, setCount] = useState(inicial);

     const sumar = () => {
         count < max ? setCount(count + 1) :  alert('No podes agregar mas productos');   
     }
     const restar = () => {
         count > inicial ? setCount(count - 1) : alert('No puedes quitar mas productos');
     }
     const reset = () => {
       setCount(inicial);
     }

  return (
  <>
    <h2 className='h1Saludo'>{count}</h2>
      <div className='contador'>
    <Stack direction="row" spacing={2}> 
      <Button onClick={sumar} variant="contained" style={{background:'black', color:'white'}}>
        +
      </Button>
      <Button onClick={restar} variant="outlined" style={{background:'black', color:'white'}}>
       -
      </Button>
      <Button onClick={() => { onAdd(count); reset()}} style={{background:'black', color:'white'}}>Agregar al carrito</Button>
    </Stack>
    </div>
    </>
  );
}
 
