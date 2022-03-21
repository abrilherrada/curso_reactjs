import { useCartContext } from '../context/CartContext';
import '../styles/CartWidget.css';

function CartWidget() {
    const {cartList, clear, total, removeItem} = useCartContext()
    return (
        <div>
            {cartList.length === 0 ? 
            <h2>Tu carrito está vacío</h2>
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
            </>
            }
        </div>
    )
}

export default CartWidget