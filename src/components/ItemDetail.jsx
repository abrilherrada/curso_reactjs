import ItemCount from "./ItemCount";
import {useState} from 'react';
import '../styles/Item.css';
import { Link } from "react-router-dom";

function ItemDetail({product}) {
    const [button, setButton] = useState('addButton')

    const onAdd = (quantity) => {
        console.log(`Agregaste ${quantity} unidades del libro ${product.title} al carrito.`)
        setButton('cartButton')
    }

    return (
            <div className="productDetailCard" key={product.id}>
                <div className="productDetailContainer">
                    <img className="productDetailImg" src={product.pictureURL} alt={product.title} />
                    <div className='productDetailInfo'>
                        <h3 className="productTitle">{product.title.toUpperCase()}</h3>
                        <h4 className="productAuthor">{product.author}</h4>
                        <p>${product.price}</p>
                        <p className="productDetailDescription">{product.description}</p>
                    </div>
                </div>
                {button === 'addButton' ? 
                <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/> 
                : 
                <div className='counterContainer'>
                    <Link to='/cart'>
                        <button className="productCart">Terminar mi compra</button>
                    </Link>
                </div>}
            </div>
    )
}

export default ItemDetail