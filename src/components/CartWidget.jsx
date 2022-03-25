import { NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../context/CartContext';
import '../styles/CartWidget.css';

function CartWidget() {
    const {cartList, totalQuantity} = useCartContext()

    return (
        <NavLink to='/cart' className="CartButton">
                {cartList.length === 0 ?
                <FontAwesomeIcon icon={faCartShopping}/>
                :
                <>
                    <FontAwesomeIcon icon={faCartShopping}/>
                    <div className='cartQuantity'>{totalQuantity()}</div>
                </>
                }
        </NavLink>
    )
}

export default CartWidget