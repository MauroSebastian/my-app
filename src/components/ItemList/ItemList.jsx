import { useEffect, useState } from "react";
import { getFetch } from "../Item/Item";



const ItemList = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
      getFetch()//llamada a la api
      .then((respuesta)=> {
        //throw new Error('error')
          setProductos(respuesta)
      })
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    }, [])
  
    return (
      <>
      <div>
        { loading ? 
          <h1>Cargando...</h1>
          :
         productos.map(productos => 
        
            <div className="card" key={productos.id}>
              <img src={productos.img} className="card-img-top" alt="..."></img>
              <div className="card-body">
              <h5 className="card-title">{productos.nombre}</h5> 
              <p className="card-text">{productos.descripcion}</p>
              </div>
            </div>
  
            )}
      </div>
      </>
    )
  }
  
  export default ItemList
