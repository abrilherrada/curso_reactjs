import { useCartContext } from '../context/CartContext';
import '../styles/css/PurchaseForm.css';

function PurchaseForm({ createPurchaseOrder, formData, saveFormData }) {
    const { verifyData } = useCartContext();

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
                    type="text"
                    name="phone"
                    placeholder="Número de teléfono"
                    value={formData.phone}
                    onChange={saveFormData}
                />
            </form>
            <button
                onClick={() =>
                    verifyData(
                        formData.address.length,
                        formData.phone.length,
                        createPurchaseOrder
                    )
                }
                className="finishPurchase"
            >
                Terminar compra
            </button>
        </>
    );
}

export default PurchaseForm;
