import { Link } from 'react-router-dom';
import '../styles/css/NoPurchases.css';

function NoPurchases() {
    return (
        <>
            <p className="noPurchases">Todavía no hiciste ninguna compra.</p>
            <p className="noPurchases">
                Podés empezar mirando nuestros productos.
            </p>
            <Link to="/" className="landingLink">
                <button className="landingButton">Ver productos</button>
            </Link>
        </>
    );
}

export default NoPurchases;
