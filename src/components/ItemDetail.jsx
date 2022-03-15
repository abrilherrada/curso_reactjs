import ItemCount from "./ItemCount";
import '../styles/Item.css';

function ItemDetail({product}) {
    
    const onAdd = (quantity) => {
        console.log(`Agregaste ${quantity} unidades del libro ${product.title} al carrito.`)
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
                <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
            </div>
    )
}

export default ItemDetail