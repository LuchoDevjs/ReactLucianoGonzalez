import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';


function ItemListContainer({saludo}) {
  const {id} = useParams();
  const [products, setProducts] = useState([]);
  const [item, setItem] = useState([]);
  const [resultado, setResultado] = useState();

  //gorrasnegras
  //console.log(id);
  useEffect(() => {
    fetch("productos.json")
    .then(res => res.json())
    .catch(error => console.error('Error:',error))
    .then(res => setProducts(res.productos))
  }, [])
  
  console.log(products);

  useEffect(() => {
    if (id) {
      console.log(id, products);
      let filtrados = products.filter((product) => product.category.localeCompare(id,undefined,{sensitivity:'base'})===id);
      setResultado(filtrados);
    }    
  },[id, products])

  console.log(resultado);

  return (
    <>
    <div>
      <h1 className='h1Saludo'>{saludo}</h1>
      {resultado !== undefined ? <ItemList personajes = {resultado}  /> : <ItemList personajes = {products}  />}
    </div>
    </>
  )
}

export default ItemListContainer;