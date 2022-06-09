import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

function ItemListContainer({saludo}) {
  const [personajes,setPersonajes] = useState([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .catch(error => console.error('Error:',error))
    .then(res => setPersonajes(res.results) )

  },[])

  return (
    <div>
      <ItemList personajes={personajes}/>
    </div>
  //  <h1 className='h1Saludo'>{saludo}</h1>
 
  )
}

export default ItemListContainer;