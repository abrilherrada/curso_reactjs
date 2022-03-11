import {useState} from 'react';
import ItemCount from "./ItemCount";
import '../styles/Item.css';

function ItemDetail({key, title, author, price, description, stock, picture, initial}) {
    const [count, setCount] = useState(1);

    const increaseCount = () => {
        if (count >= initial && count < stock) {
            setCount(count + 1);
        }
    }

    const decreaseCount = () => {
        if (count > initial && count <= stock) {
            setCount(count - 1);
        }
    }

    const onAdd = () => {
        console.log(`Agregaste ${count} unidades del libro ${title} al carrito.`)
    }
    
    return (
            <div className="productCard">
                <img src={picture} alt={title} />
                <h3 className="productTitle">{title}</h3>
                <h4 className="productAuthor">{author}</h4>
                <p className="productPrice">${price}</p>
                <p className="productDescription">{description}</p>
                <ItemCount count={count} increaseCount={increaseCount} decreaseCount={decreaseCount}/>
                <button onClick={onAdd} className="productAdd">Agregar</button>
            </div>
    )
}

export default ItemDetail