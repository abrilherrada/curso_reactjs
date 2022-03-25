import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/NavBar.css';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <nav className='NavBar'>
            <NavLink to='/'><img src={logo} alt="logo"/></NavLink>
            <div className='CategoriesContainer'>
                <NavLink to='category/infantil' className="NavLink">Niños</NavLink>
                <NavLink to='category/juvenil' className="NavLink">Adolescentes</NavLink>
                <NavLink to='category/adultos' className="NavLink">Adultos</NavLink>
            </div>
            <CartWidget/>
        </nav>
    );
}

export default NavBar;