import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import './styles/App.css';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='¡Te damos la bienvenida!'/>}/>
          <Route path='/category/:id' element={<ItemListContainer greeting='¡Te damos la bienvenida!'/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/*' element={<Navigate to='/' replace/>}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;