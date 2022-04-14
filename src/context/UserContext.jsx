import { createContext, useState, useContext } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/config';

const UserContext = createContext([]);

export const useUserContext = () => useContext(UserContext);

function UserContextProvider({children}) {
    const [registrationForm, setRegistrationForm] = useState({name: '', email:'', password: ''});
    const [logInForm, setLogInForm] = useState({email:'', password: ''});
    const [user, setUser] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [passwordIsValid, setPasswordIsValid] = useState(true)

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    const verifyPassword = (password1, password2) => {
        if (password1 === password2) {
            setPasswordIsValid(true)
        }
        else {
            setPasswordIsValid(false)
        }
    }

    const saveRegistrationForm = (e) => {
        setRegistrationForm({...registrationForm, [e.target.name]: e.target.value})
    }

    const saveLogInForm = (e) => {
        setLogInForm({...logInForm, [e.target.name]: e.target.value})
    }

    const register = async (password1, password2) => {
        verifyPassword(password1, password2)
        if (passwordIsValid) {
            try {
                await createUserWithEmailAndPassword(auth, registrationForm.email, registrationForm.password)
                setIsLoggedIn(!isLoggedIn)
                try {
                    await updateProfile(auth.currentUser, {
                        displayName: registrationForm.name
                    })
                }
                catch (error) {
                    console.log(error.message)
                }
            }
            catch (error) {
                console.log(error.message)
            }
        }
    }

    const logIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, logInForm.email, logInForm.password)
            setIsLoggedIn(!isLoggedIn)
        }
        catch (error) {
            console.log(error.message)
        }
    }

    const logOut = async () => {
        await signOut(auth)
        setIsLoggedIn(!isLoggedIn)
    }

    return (
        <UserContext.Provider value={{saveRegistrationForm, saveLogInForm, register, user, logOut, logIn, isLoggedIn, passwordIsValid, verifyPassword}}>
            {children}
        </UserContext.Provider>
        )
}

export default UserContextProvider