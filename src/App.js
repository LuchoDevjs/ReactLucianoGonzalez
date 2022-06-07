import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  const onAdd = (count) => {
   alert(`sumaste ${count} productos`);
  }
  return (
  <>
  <NavBar />
  <ItemListContainer saludo={'Hola te doy la bienvenida a mi pagina'}/>
  <ItemCount inicial={1} max={10} onAdd={onAdd}/>
  </>
  );
}

export default App;
