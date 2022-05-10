import { useState } from 'react';


const ItemCount = ( { stock, initial}) => {

    const [minimo, setMinimo] = useState(initial)

    const [count, setCount] = useState(0)


function sumar() {

    if (minimo >= 1 && minimo < stock) {
        setMinimo ( minimo + 1)
    }
}

function restar() {

 if (minimo >= 2) {
    setMinimo ( minimo - 1)
 }

   }

function onAdd(){
    console.log('Usted agregó ' + minimo + ' artículos al carrito')
}

  return (
    <>
    <div>
    <button onClick={restar}>-</button>
    {minimo}
    <button onClick={sumar}>+</button>
    </div>
    <div>
    <button onClick={onAdd}>Agregar al carrito</button>
    </div>
    </>
  )
}

export default ItemCount