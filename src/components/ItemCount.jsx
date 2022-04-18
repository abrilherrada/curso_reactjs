import { useState } from 'react';
import '../styles/css/ItemCount.css';

function ItemCount({ initial, stock, onAdd }) {
    const [count, setCount] = useState(initial);

    const increaseCount = () => {
        if (count >= initial && count < stock) {
            setCount(count + 1);
        }
    };

    const decreaseCount = () => {
        if (count > initial && count <= stock) {
            setCount(count - 1);
        }
    };

    const add = () => {
        onAdd(count);
    };

    return (
        <div className="counterContainer">
            <div className="quantityContainer">
                <button onClick={decreaseCount} className="quantityButton">
                    -
                </button>
                <label className="quantityInput">{count}</label>
                <button onClick={increaseCount} className="quantityButton">
                    +
                </button>
            </div>
            <button onClick={add} className="productAdd">
                Agregar
            </button>
        </div>
    );
}

export default ItemCount;
