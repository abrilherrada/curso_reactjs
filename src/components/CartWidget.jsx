import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useUserContext } from '../context/UserContext';
import { useCartContext } from '../context/CartContext';
import '../styles/css/CartWidget.css';

function CartWidget() {
    const { user } = useUserContext();
    const { cartList, totalQuantity } = useCartContext();

    return (
        <>
            {user ? (
                <NavLink to="/cart" className="cartButton">
                    {cartList.length === 0 ? (
                        <FontAwesomeIcon icon={faCartShopping} />
                    ) : (
                        <>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <div className="cartQuantity">
                                {totalQuantity()}
                            </div>
                        </>
                    )}
                </NavLink>
            ) : (
                <></>
            )}
        </>
    );
}

export default CartWidget;
