import { useUserContext } from '../context/UserContext';
import '../styles/css/Purchases.css';

function Purchases() {
    const { orders } = useUserContext();

    return (
        <>
            {orders.map((order) => (
                <table className="purchasesContainer" key={order.id}>
                    <tbody>
                        <tr>
                            <td className="purchasesTitle purchasesNumber">
                                Compra #:
                            </td>
                            <td className="purchasesTD">{order.id}</td>
                        </tr>
                        <tr>
                            <td className="purchasesTitle">Fecha:</td>
                            <td className="purchasesTD">{order.date}</td>
                        </tr>
                        <tr>
                            <td className="purchasesTitle">Productos:</td>
                            <td className="purchasesTD">
                                {order.items.map((item) => (
                                    <li key={item.id}>
                                        {item.title} x{item.quantity}
                                    </li>
                                ))}
                            </td>
                        </tr>
                        <tr>
                            <td className="purchasesTitle">Precio total:</td>
                            <td className="purchasesTD">${order.total}</td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </>
    );
}

export default Purchases;
