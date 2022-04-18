import { useRef } from 'react';
import { useUserContext } from '../context/UserContext';

function RegisterForm() {
    const { saveRegistrationForm, register, passwordIsValid, verifyPassword } =
        useUserContext();
    const password1 = useRef(null);
    const password2 = useRef(null);

    return (
        <>
            <form>
                <input
                    className="registerInput"
                    type="text"
                    name="name"
                    placeholder="Nombre y Apellido"
                    required
                    onChange={saveRegistrationForm}
                />
                <input
                    className="registerInput"
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    required
                    onChange={saveRegistrationForm}
                />
                <input
                    ref={password1}
                    className="registerInput"
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    required
                    onChange={(e) => {
                        saveRegistrationForm(e);
                        verifyPassword(
                            password1.current.value,
                            password2.current.value
                        );
                    }}
                />
                <input
                    ref={password2}
                    className="registerInput"
                    type="password"
                    name="password"
                    placeholder="Confirmá tu contraseña"
                    required
                    onChange={() => {
                        verifyPassword(
                            password1.current.value,
                            password2.current.value
                        );
                    }}
                />
                <p
                    className={
                        passwordIsValid
                            ? 'wrongPassword hidden'
                            : 'wrongPassword'
                    }
                >
                    Las contraseñas no coinciden ☹
                </p>
            </form>
            <button
                className="completeRegister"
                onClick={() => {
                    register(password1.current.value, password2.current.value);
                }}
            >
                Registrarse
            </button>
        </>
    );
}

export default RegisterForm;
