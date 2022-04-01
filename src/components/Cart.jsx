import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from '../context/CartContext';
import '../styles/CartWidget.css';
import swal from 'sweetalert';

function Cart() {
    const {cartList, clear, total, removeItem} = useCartContext()
    const [formData, setFormData] = useState({email: '', name: '', phone: ''})

    const db = getFirestore()

    const updateStock = async () => {
        const queryCollection = collection(db, 'products')
        const update = await query(
            queryCollection,
            where(documentId(), 'in', cartList.map(item => item.id))
        )
        const batch = writeBatch(db)
        await getDocs(update)
        .then(response => response.docs.forEach(resp => batch.update(resp.ref, {
            stock: resp.data().stock - cartList.find(item => item.id === resp.id).quantity
        })))
        batch.commit()
    }
    
    const createPurchaseOrder = () => {
        let purchaseOrder = {};
        purchaseOrder.buyer = formData;
        purchaseOrder.items = cartList.map((product) => {
            const id = product.id;
            const title = product.title;
            const productTotal = product.quantity * product.price;
            return {id, title, productTotal}
        });
        purchaseOrder.total = total();
        console.log(purchaseOrder)

        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, purchaseOrder)
        .then(response => {
            let orderId = response.id
            swal("¡Listo!", `Tu compra se registró correctamente.\nEl código de tu compra es ${orderId}.`, "success")
        })
        .catch(error => console.log(error))
        .finally(response => console.log(response))

        updateStock()
    }

    const saveFormData = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    return (
        <div>
            {cartList.length === 0 ? 
            <>
                <h2>Tu carrito está vacío</h2>
                <Link to='/' className="landingLink">
                    <button className="landingButton">Ver productos</button>
                </Link>
            </>
            :
            <>
                <h2>Resumen de compra</h2>
                <table>
                    <tbody>
                        {cartList.map((product) => 
                        <tr key={product.id}>
                            <td><img className="productCartImg" src={product.pictureURL} alt={product.title} /></td>
                            <td>{product.title}</td>
                            <td className='tdNumber'>x{product.quantity}</td>
                            <td className='tdNumber'>${product.quantity * product.price}</td>
                            <td className='tdClose'><span onClick={() => removeItem(product.id)} className='closeButton'>&times;</span></td>
                        </tr>)}
                        <tr>
                            <td></td>
                            <td></td>
                            <td><strong>Total</strong></td>
                            <td className='tdNumber'>${total()}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={clear} className="clearCart">Vaciar carrito</button>
                <form>
                    <input className='formInput' type='text' name='name' placeholder='Nombre y Apellido' value={formData.name} onChange={saveFormData}/>
                    <input className='formInput' type='text' name='phone' placeholder='Número de teléfono' value={formData.phone} onChange={saveFormData}/>
                    <input className='formInput' type='email' name='email' placeholder='Correo electrónico' value={formData.email} onChange={saveFormData}/>
                </form>
                <button onClick={createPurchaseOrder} className="clearCart">Terminar compra</button>
            </>
            }
        </div>
    )
}

export default Cart