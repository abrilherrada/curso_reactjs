import { useUserContext } from '../context/UserContext';

function LogInForm() {
    const { saveLogInForm, logIn } = useUserContext();

    return (
        <>
            <form>
                <div>
                    <input
                        className="logInInput"
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        required
                        onChange={saveLogInForm}
                    />
                    <input
                        className="logInInput"
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        required
                        onChange={saveLogInForm}
                    />
                </div>
            </form>
            <button className="completeLogIn" onClick={logIn}>
                Iniciar sesión
            </button>
        </>
    );
}

export default LogInForm;
