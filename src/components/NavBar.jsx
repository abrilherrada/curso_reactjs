import logo from '../images/logo.png';
import '../styles/NavBar.css';
import CartWidget from './CartWidget'

function NavBar() {
    return (
        <nav className='NavBar'>
            <a href="/"><img src={logo} alt="logo"/></a>
            <div className='CategoriesContainer'>
                <ul className='Categories'>
                    <li><a className="NavLink" href="/">Niños</a></li>
                    <li><a className="NavLink" href="/">Adolescentes</a></li>
                    <li><a className="NavLink" href="/">Adultos</a></li>
                </ul>
            </div>
            <CartWidget/>
        </nav>
    );
}

export default NavBar;