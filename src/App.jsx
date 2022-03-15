import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartWidget from './components/CartWidget';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='¡Te damos la bienvenida!'/>}/>
          <Route path='/category/:id' element={<ItemListContainer greeting='¡Te damos la bienvenida!'/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartWidget/>}/>
          <Route path='/*' element={<Navigate to='/' replace/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;