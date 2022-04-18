import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import '../styles/css/ItemDetail.css';

function ItemDetail({ product }) {
    const { addItem } = useCartContext();
    const [button, setButton] = useState('addButton');

    const onAdd = (quantity) => {
        setButton('cartButton');
        addItem({ ...product, quantity: quantity }, quantity);
    };

    return (
        <div className="productDetailCard" key={product.id}>
            <div className="productDetailContainer">
                <img
                    className="productDetailImg"
                    src={product.pictureURL}
                    alt={product.title}
                />
                <div className="productDetailInfo">
                    <h3 className="productTitle">
                        {product.title.toUpperCase()}
                    </h3>
                    <h4 className="productAuthor">{product.author}</h4>
                    <p className="productPrice">${product.price}</p>
                    <p className="productDetailDescription">
                        {product.description}
                    </p>
                </div>
            </div>
            {button === 'addButton' ? (
                <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
            ) : (
                <div className="buttonContainer">
                    <Link to="/cart">
                        <button className="productCartButton">
                            Ir al carrito
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default ItemDetail;
