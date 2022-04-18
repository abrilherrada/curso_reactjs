import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import UserContextProvider from './context/UserContext';
import CartContextProvider from './context/CartContext';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import LogIn from './components/LogIn';
import UserProfile from './components/UserProfile';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './styles/css/App.css';

function App() {
    return (
        <UserContextProvider>
            <CartContextProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Hero />
                                    <ItemListContainer />
                                </>
                            }
                        />
                        <Route
                            path="/category/:id"
                            element={<ItemListContainer />}
                        />
                        <Route
                            path="/item/:id"
                            element={<ItemDetailContainer />}
                        />
                        <Route
                            path="/profile"
                            element={
                                <>
                                    <LogIn />
                                    <UserProfile />
                                </>
                            }
                        />
                        <Route path="/cart" element={<Cart />} />
                        <Route
                            path="/*"
                            element={<Navigate to="/" replace />}
                        />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </CartContextProvider>
        </UserContextProvider>
    );
}

export default App;
