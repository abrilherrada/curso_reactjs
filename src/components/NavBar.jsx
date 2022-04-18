import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';
import CartWidget from './CartWidget';
import '../styles/css/NavBar.css';

function NavBar() {
    const [isActive, setActive] = useState('false');

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <nav className="navbar">
            <div className="navbrand">
                <NavLink to="/">
                    <img className="logo" src={logo} alt="logo" />
                </NavLink>
                <div
                    className={isActive ? 'burger active' : 'burger null'}
                    onClick={toggleClass}
                >
                    <span className="burgerOpen">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="16"
                        >
                            <g fill="#fff" fillRule="evenodd">
                                <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
                            </g>
                        </svg>
                    </span>
                    <span className="burgerClose">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                        >
                            <path
                                fill="#fff"
                                fillRule="evenodd"
                                d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
                            />
                        </svg>
                    </span>
                </div>
            </div>
            <div
                className={isActive ? 'menu active' : 'menu null'}
                onClick={toggleClass}
            >
                <NavLink to="category/infantil" className="menuLink">
                    Niños
                </NavLink>
                <NavLink to="category/juvenil" className="menuLink">
                    Adolescentes
                </NavLink>
                <NavLink to="category/adultos" className="menuLink">
                    Adultos
                </NavLink>
            </div>
            <div className="navButtonsContainer">
                <NavLink to="/profile" className="LogInButton">
                    <FontAwesomeIcon icon={faUser} />
                </NavLink>
                <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar;
