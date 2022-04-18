import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    addDoc,
    collection,
    documentId,
    getDocs,
    getFirestore,
    query,
    where,
    writeBatch,
} from 'firebase/firestore';
import swal from 'sweetalert';
import { useUserContext } from '../context/UserContext';
import { useCartContext } from '../context/CartContext';
import PurchaseSummary from './PurchaseSummary';
import PurchaseForm from './PurchaseForm';
import '../styles/css/Cart.css';

function Cart() {
    const { cartList, total } = useCartContext();
    const { user } = useUserContext();
    const [formData, setFormData] = useState({
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        phone: '',
        address: '',
    });

    const db = getFirestore();

    const updateStock = async () => {
        const queryCollection = collection(db, 'products');
        const update = query(
            queryCollection,
            where(
                documentId(),
                'in',
                cartList.map((item) => item.id)
            )
        );
        const batch = writeBatch(db);
        await getDocs(update).then((response) =>
            response.docs.forEach((resp) =>
                batch.update(resp.ref, {
                    stock:
                        resp.data().stock -
                        cartList.find((item) => item.id === resp.id).quantity,
                })
            )
        );
        batch.commit();
    };

    const createPurchaseOrder = () => {
        let purchaseOrder = {};
        purchaseOrder.buyer = formData;
        purchaseOrder.items = cartList.map((product) => {
            const id = product.id;
            const title = product.title;
            const quantity = product.quantity;
            const productTotal = product.quantity * product.price;
            return { id, title, quantity, productTotal };
        });
        purchaseOrder.total = total();
        purchaseOrder.date = new Date().toString();

        const queryCollection = collection(db, 'orders');
        addDoc(queryCollection, purchaseOrder)
            .then((response) => {
                let orderId = response.id;
                swal(
                    '¡Listo!',
                    `Tu compra se registró correctamente.\nEl código de tu compra es ${orderId}.`,
                    'success'
                );
            })
            .catch((error) => console.log(error));

        updateStock();
    };

    const saveFormData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            {cartList.length === 0 ? (
                <>
                    <h2>Tu carrito está vacío</h2>
                    <Link to="/" className="landingLink">
                        <button className="landingButton">Ver productos</button>
                    </Link>
                </>
            ) : (
                <>
                    <PurchaseSummary />
                    <PurchaseForm
                        createPurchaseOrder={createPurchaseOrder}
                        formData={formData}
                        saveFormData={saveFormData}
                    />
                    <p className="currentUser">
                        Estás comprando como <strong>{user.displayName}</strong>
                        . Si querés cambiar de cuenta, podés hacerlo en tu
                        perfil.
                    </p>
                    <Link to="/profile" className="landingLink">
                        <button className="landingButton">
                            Ir a mi perfil
                        </button>
                    </Link>
                </>
            )}
        </div>
    );
}

export default Cart;
