import './App.css';
// import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";


function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
      <div className="contenido">
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/category/:id" element={<ItemListContainer />}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
        </Routes>
      </div>
     </BrowserRouter> 
      </div>
  );
}

export default App;
