import Item from "./Item";
import '../styles/Item.css';

function ItemList({products}) {
    return (
        <div className="productContainer">
            {products.map(product => 
                <Item key={product.id} product={product}/>
            )}
        </div>
    )
}

export default ItemList