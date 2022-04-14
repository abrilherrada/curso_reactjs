import { useUserContext } from '../context/UserContext';
import {useState, useEffect} from 'react';
import '../css/LogIn.css';
import '../css/UserProfile.css';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function UserProfile () {
    const {user, logOut, isLoggedIn} = useUserContext();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        if (isLoggedIn) {
            const db = getFirestore()
            const queryCollection = collection(db, 'orders')
            const queryFilter = query(queryCollection, where('buyer.uid', '==', user.uid))
            getDocs(queryFilter)
            .then((response) => {
                setOrders(response.docs.map(order => ({id: order.id, ...order.data()})))
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        }
    }, [isLoggedIn])
    return (
        <div className={isLoggedIn ? 'null' : 'hidden'}>
            {loading ? 
            <div className='loadingContainer'>
                <img className="loading" src='/images/loading.gif' alt=''></img>
            </div>
            :
            <div>
                <h2 className='userTitle'>¡Hola, {user?.displayName}!</h2>
                <h3 className='purchases'>Tus compras</h3>
                {orders.length === 0 ?
                <>
                    <p className='noPurchases'>Todavía no hiciste ninguna compra.</p>
                    <p className='noPurchases'>Podés empezar mirando nuestros productos.</p>
                    <Link to='/' className="landingLink">
                        <button className="landingButton">Ver productos</button>
                    </Link>
                </>
                :
                <>
                    {orders.map((order) =>
                    <table className='purchasesContainer' key={order.id}>
                        <tbody>
                            <tr className='purchasesRow'>
                                <td className='purchasesTitle purchasesNumber'>Compra #:</td>
                                <td className='purchasesTD'>{order.id}</td>
                            </tr>
                            <tr className='purchasesRow'>
                                <td className='purchasesTitle'>Productos:</td>
                                <td className='purchasesTD'>{order.items.map((item) => <li key={item.id}>{item.title}</li>)}</td>
                            </tr>
                            <tr className='purchasesRow'>
                                <td className='purchasesTitle'>Precio total:</td>
                                <td className='purchasesTD'>${order.total}</td>
                            </tr>
                        </tbody>
                    </table>
                    )}
                </>
                }
                <button className='logOutButton' onClick={logOut}>Cerrar sesión</button>
            </div>
            }
        </div>
    )
}

export default UserProfile