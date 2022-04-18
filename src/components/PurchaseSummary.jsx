import { useCartContext } from '../context/CartContext';
import '../styles/css/PurchaseSummary.css';

function PurchaseSummary() {
    const { cartList, total, removeItem, confirmClearClart } = useCartContext();

    return (
        <>
            <h2>Resumen de compra</h2>
            <table>
                <tbody>
                    {cartList.map((product) => (
                        <tr key={product.id}>
                            <td>
                                <img
                                    className="productCartImg"
                                    src={product.pictureURL}
                                    alt={product.title}
                                />
                            </td>
                            <td>{product.title}</td>
                            <td className="tdNumber">x{product.quantity}</td>
                            <td className="tdNumber">
                                ${product.quantity * product.price}
                            </td>
                            <td className="tdClose">
                                <span
                                    onClick={() => removeItem(product.id)}
                                    className="closeButton"
                                >
                                    &times;
                                </span>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td></td>
                        <td></td>
                        <td className="tdNumber">
                            <strong>Total</strong>
                        </td>
                        <td className="tdNumber">${total()}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={confirmClearClart} className="clearCart">
                Vaciar carrito
            </button>
        </>
    );
}

export default PurchaseSummary;
