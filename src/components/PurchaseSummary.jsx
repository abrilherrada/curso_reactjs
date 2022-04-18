import swal from 'sweetalert';
import { useCartContext } from '../context/CartContext';
import '../styles/css/PurchaseSummary.css';

function PurchaseSummary() {
    const { cartList, total, removeItem, clear } = useCartContext();

    const confirmClearClart = () => {
        swal({
            title: '¿Confirmás que querés vaciar el carrito?',
            text: 'Si solo querés sacar un producto, podés hacer clic en la X que se encuentra a su derecha. De esta forma, los otros productos se mantendrán.',
            icon: 'warning',
            buttons: ['Cancelar', 'Vaciar'],
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                swal('¡Listo! Sacamos todos los productos del carrito.', {
                    icon: 'success',
                });
                clear();
            } else {
                swal('Todos los productos siguen en el carrito.');
            }
        });
    };

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
