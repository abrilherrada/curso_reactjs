import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAe073T7O6_uaE0Zrgmsj2qpf3L5YUY8Xg",
    authDomain: "reactjs-el-tunel.firebaseapp.com",
    projectId: "reactjs-el-tunel",
    storageBucket: "reactjs-el-tunel.appspot.com",
    messagingSenderId: "569574318303",
    appId: "1:569574318303:web:00623e5815268fe165096a"
};

const app = initializeApp(firebaseConfig);

const getFirestoreApp = () => {
    return app
}

export const auth = getAuth(app)

export default getFirestoreApp