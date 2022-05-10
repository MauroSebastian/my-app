
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <>
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Hola, este es mi ItemListContainer'}/>
      <ItemCount initial={1} stock={5} />
    </div>
    </>
  );
}

export default App;
