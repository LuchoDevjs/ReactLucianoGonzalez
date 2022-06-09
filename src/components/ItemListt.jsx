import React from 'react'
import Item from './Item'

function ItemListt({personajes}) {
  return (
    <div className='ListaPersonajes'>
        {personajes.map(personaje => <Item key={personaje.id} personaje={personaje}/>)}
    </div>
  )
}

export default ItemListt;