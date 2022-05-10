import logo from '../../logo.svg';

function ItemListContainer( {greeting} ) {
  return (
    <>
    <div>{greeting}</div>
    <div>
      <h2>Libro prueba</h2>
      <img src={logo} alt="" width={350} />
    </div>


    </>
  )
}

export default ItemListContainer