import "./App.css";
// import ItemCount from './components/ItemCount';
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./components/Error404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="contenido">
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer saludo="Hola te doy la bienveida a mi pagina" />
              }
            />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
