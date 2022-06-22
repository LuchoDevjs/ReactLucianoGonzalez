import "./App.css";
// import ItemCount from './components/ItemCount';
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./components/Error404";
import Cart from "./components/Cart";
import CartContext from "./components/context/CartContext";
import MyProvider from "./components/context/CartContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MyProvider>
      <CartContext>
        <NavBar />
        <div className="contenido">
          <Routes>
            <Route path="/" element={<ItemListContainer saludo="BIENVENIDOS A MI E-COMMERCE" />}
            />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
        </CartContext>
        </MyProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
