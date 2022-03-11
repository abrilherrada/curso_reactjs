import './styles/App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting='Bienvenido a librería El Túnel'/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;