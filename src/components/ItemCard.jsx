import {useState} from 'react';
import ItemCount from "./ItemCount";
import '../styles/ItemCard.css';
import image from '../images/el-tunel.jpg';

function ItemCard({stock, initial}) {
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
        console.log(`${count} productos agregados al carrito.`)
    }
    
    return (
        <div className="productCard">
            <img className="productImg" src={image} alt="El túnel, Ernesto Sábato"></img>
            <h3 className="productTitle">El túnel</h3>
            <ItemCount count={count} increaseCount={increaseCount} decreaseCount={decreaseCount}/>
            <button onClick={onAdd} className="productAdd">Agregar</button>
        </div>
    )
}

export default ItemCard