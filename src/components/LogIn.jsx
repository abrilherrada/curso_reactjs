import '../css/LogIn.css';
import { useState, useRef } from "react";
import { useUserContext } from '../context/UserContext';

function LogIn () {
    const {saveRegistrationForm, saveLogInForm, register, logIn, isLoggedIn, passwordIsValid, verifyPassword} = useUserContext();
    const password1 = useRef(null)
    const password2 = useRef(null)
    const [userAction, setUserAction] = useState('logIn')
    
    const logInAction = () => {
        setUserAction('logIn')
    }
    const registerAction = () => {
        setUserAction('register')
    }

    return (
        <div className={isLoggedIn ? 'hidden' : 'null'}>
            <h2 className='logInTitle'>Iniciá sesión para empezar a comprar</h2>
            <div className='logInContainer'>
                <div className='tabContainer'>
                    <input type="radio" id="tab1" name="tab" className="tabInput" defaultChecked/>
                    <label htmlFor="tab1" onClick={logInAction}>Iniciar sesión</label>
                    <input type="radio" id="tab2" name="tab" className="tabInput"/>
                    <label htmlFor="tab2" onClick={registerAction}>Registrarse</label>
                </div>
                {userAction === 'logIn' ?
                <>
                    <form>
                        <div>
                            <input className='logInInput' type='email' name='email' placeholder='Correo electrónico' required onChange={saveLogInForm}/>
                            <input className='logInInput' type='password' name='password' placeholder='Contraseña' required onChange={saveLogInForm}/>
                        </div>
                    </form>
                    <button className='completeLogIn' onClick={logIn}>Iniciar sesión</button>
                </>
                :
                <>
                    <form>
                        <input className='registerInput' type='text' name='name' placeholder='Nombre y Apellido' required onChange={saveRegistrationForm}/>                  
                        <input className='registerInput' type='email' name='email' placeholder='Correo electrónico' required onChange={saveRegistrationForm}/>
                        <input ref={password1} className='registerInput' type='password' name='password' placeholder='Contraseña' required onChange={(e) => {
                            saveRegistrationForm(e);
                            verifyPassword(password1.current.value, password2.current.value);
                        }}/>
                        <input ref={password2} className='registerInput' type='password' name='password' placeholder='Confirmá tu contraseña' required onChange={() => {verifyPassword(password1.current.value, password2.current.value)}}/>
                        <p className={passwordIsValid ? 'wrongPassword hidden' : 'wrongPassword'}>Las contraseñas no coinciden ☹</p>
                    </form>
                    <button className='completeRegister' onClick={() => {
                        register(password1.current.value, password2.current.value)
                    }}>Registrarse</button>
                </>
                }
            </div>
        </div>
    )
}

export default LogIn