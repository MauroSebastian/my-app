import logo from '../../logo.svg';
import ItemList from '../ItemList/ItemList';



const ItemListContainer = () => {

  return (
    <>
    <div>
      <h2>Libro prueba</h2>
      <img src={logo} alt="" width={350} />
    </div>
    <ItemList />
    </>
  )
}

export default ItemListContainer