import React from 'react'


function ItemDetail({item}) {
   const {model, year, color, category, price} = item;

  return (
 <>
 <h2 style={{textAlign:'center'}}>Detalle del Producto</h2>
 <div className='itemDetail'>
    <img src="assets/img/gorraNYblack.jpg" className='itemDetail__img' alt="" />
     <div className='itemDetail__p'>
     <p>{model}</p>
     <p>Year: {year}</p>
     <p>Color:{color}</p>
     <p>Categoria: {category}</p>
     <p>{price}</p>
     <button>Comprar</button>
     </div>
 </div>
 </>
  )
}

export default ItemDetail;