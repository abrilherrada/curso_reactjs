import swal from 'sweetalert';
import { useCartContext } from '../context/CartContext';
import '../styles/css/PurchaseForm.css';

function PurchaseForm({ createPurchaseOrder, formData, saveFormData }) {
    const { clear } = useCartContext();

    const verifyData = () => {
        if (formData.address.length !== 0 && formData.phone.length !== 0) {
            createPurchaseOrder();
            clear();
        } else {
            swal(
                'Faltan datos',
                'Para poder procesar tu compra, necesitamos que completes los campos de dirección y de teléfono.',
                'error'
            );
        }
    };

    return (
        <>
            <h2>Completá los siguientes datos necesarios para el envío</h2>
            <form className="cartForm">
                <input
                    className="formInput"
                    type="text"
                    name="address"
                    placeholder="Dirección de envío"
                    value={formData.address}
                    onChange={saveFormData}
                />
                <input
                    className="formInput"
                    type="number"
                    name="phone"
                    placeholder="Número de teléfono"
                    value={formData.phone}
                    onChange={saveFormData}
                />
            </form>
            <button onClick={verifyData} className="finishPurchase">
                Terminar compra
            </button>
        </>
    );
}

export default PurchaseForm;
