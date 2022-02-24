import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import '../styles/CartWidget.css';

function CartWidget() {
    return (
        <button className="CartButton">
            <FontAwesomeIcon icon={faCartShopping} />
        </button>
    )
}

export default CartWidget