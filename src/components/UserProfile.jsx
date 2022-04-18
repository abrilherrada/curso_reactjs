import { useState, useEffect } from 'react';
import {
    collection,
    getDocs,
    getFirestore,
    query,
    where,
} from 'firebase/firestore';
import { useUserContext } from '../context/UserContext';
import Loading from './Loading';
import NoPurchases from './NoPurchases';
import Purchases from './Purchases';
import '../styles/css/UserProfile.css';

function UserProfile() {
    const { user, logOut, orders, setOrders } = useUserContext();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            const db = getFirestore();
            const queryCollection = collection(db, 'orders');
            const queryFilter = query(
                queryCollection,
                where('buyer.uid', '==', user.uid)
            );
            getDocs(queryFilter)
                .then((response) => {
                    setOrders(
                        response.docs.map((order) => ({
                            id: order.id,
                            ...order.data(),
                        }))
                    );
                })
                .catch((error) => console.log(error))
                .finally(() => setLoading(false));
        }
    }, [user]);

    return (
        <div className={user ? 'null' : 'hidden'}>
            {loading ? (
                <Loading />
            ) : (
                <div>
                    <h2 className="userTitle">¡Hola, {user?.displayName}!</h2>
                    <h3 className="purchases">Tus compras</h3>
                    {orders.length === 0 ? <NoPurchases /> : <Purchases />}
                    <button className="logOutButton" onClick={logOut}>
                        Cerrar sesión
                    </button>
                </div>
            )}
        </div>
    );
}

export default UserProfile;
