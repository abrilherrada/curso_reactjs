import '../styles/ItemCount.css';

function ItemCount({count, increaseCount, decreaseCount}) {
    return (
        <div className="quantityContainer">
            <button onClick={decreaseCount} className="quantityButton">-</button>
            <input type="number" value={count} className="quantityInput"></input>
            <button onClick={increaseCount} className="quantityButton">+</button>
        </div>
    )
}

export default ItemCount