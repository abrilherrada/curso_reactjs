import { createContext, useState, useContext } from 'react';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    setPersistence,
    browserLocalPersistence,
} from 'firebase/auth';
import { auth } from '../firebase/config';
import swal from 'sweetalert';

const UserContext = createContext([]);

export const useUserContext = () => useContext(UserContext);

function UserContextProvider({ children }) {
    const [registrationForm, setRegistrationForm] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [logInForm, setLogInForm] = useState({ email: '', password: '' });
    const [user, setUser] = useState();
    const [passwordIsValid, setPasswordIsValid] = useState(true);
    const [orders, setOrders] = useState([]);

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const verifyPassword = (password1, password2) => {
        if (password1 === password2) {
            setPasswordIsValid(true);
        } else {
            setPasswordIsValid(false);
        }
    };

    const saveRegistrationForm = (e) => {
        setRegistrationForm({
            ...registrationForm,
            [e.target.name]: e.target.value,
        });
    };

    const saveLogInForm = (e) => {
        setLogInForm({ ...logInForm, [e.target.name]: e.target.value });
    };

    const register = async (password1, password2) => {
        verifyPassword(password1, password2);
        if (passwordIsValid) {
            try {
                await setPersistence(auth, browserLocalPersistence);
                await createUserWithEmailAndPassword(
                    auth,
                    registrationForm.email,
                    registrationForm.password
                );
                try {
                    await updateProfile(auth.currentUser, {
                        displayName: registrationForm.name,
                    });
                } catch (error) {
                    console.log(error.message);
                }
            } catch (error) {
                swal(
                    'Hubo un error con tu registro.',
                    `Verificá que el correo electrónico sea válido y que la contraseña tenga al menos 6 caracteres.`,
                    'error'
                );
                console.log(error.message);
            }
        }
    };

    const logIn = async () => {
        try {
            await setPersistence(auth, browserLocalPersistence);
            await signInWithEmailAndPassword(
                auth,
                logInForm.email,
                logInForm.password
            );
        } catch (error) {
            swal(
                'Hubo un error al iniciar sesión.',
                `Verificá que el correo electrónico y la contraseña estén bien escritos.`,
                'error'
            );
            console.log(error.message);
        }
    };

    const logOut = async () => {
        await signOut(auth);
        setUser(null);
    };

    return (
        <UserContext.Provider
            value={{
                saveRegistrationForm,
                saveLogInForm,
                register,
                user,
                logOut,
                logIn,
                passwordIsValid,
                verifyPassword,
                orders,
                setOrders,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
