import { useState } from 'react';
import { useUserContext } from '../context/UserContext';
import LogInForm from './LogInForm';
import RegisterForm from './RegisterForm';
import '../styles/css/LogIn.css';

function LogIn() {
    const { user } = useUserContext();
    const [userAction, setUserAction] = useState('logIn');

    const logInAction = () => {
        setUserAction('logIn');
    };

    const registerAction = () => {
        setUserAction('register');
    };

    return (
        <div className={user ? 'hidden' : 'null'}>
            <h2 className="logInTitle">Iniciá sesión para empezar a comprar</h2>
            <div className="logInContainer">
                <div className="tabContainer">
                    <input
                        type="radio"
                        id="tab1"
                        name="tab"
                        className="tabInput"
                        defaultChecked
                    />
                    <label htmlFor="tab1" onClick={logInAction}>
                        Iniciar sesión
                    </label>
                    <input
                        type="radio"
                        id="tab2"
                        name="tab"
                        className="tabInput"
                    />
                    <label htmlFor="tab2" onClick={registerAction}>
                        Registrarse
                    </label>
                </div>
                {userAction === 'logIn' ? <LogInForm /> : <RegisterForm />}
            </div>
        </div>
    );
}

export default LogIn;
