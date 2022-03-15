import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/NavBar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    return (
        <nav className='NavBar'>
            <NavLink to='/'><img src={logo} alt="logo"/></NavLink>
            <div className='CategoriesContainer'>
                <NavLink to='category/infantil' className="NavLink">Niños</NavLink>
                <NavLink to='category/juvenil' className="NavLink">Adolescentes</NavLink>
                <NavLink to='category/adultos' className="NavLink">Adultos</NavLink>
            </div>
            <NavLink to='/cart' className="CartButton">
                <FontAwesomeIcon icon={faCartShopping}/>
            </NavLink>
        </nav>
    );
}

export default NavBar;