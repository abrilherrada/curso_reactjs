import { Link } from 'react-router-dom';
import '../styles/css/Item.css';

function Item({ product }) {
    return (
        <div className="productCard" key={product.id}>
            <img
                className="productImg"
                src={product.pictureURL}
                alt={product.title}
            />
            <div className="productInfo">
                <div>
                    <h3 className="productTitle">
                        {product.title.toUpperCase()}
                    </h3>
                    <h4 className="productAuthor">{product.author}</h4>
                </div>
                <Link to={`/item/${product.id}`}>
                    <button className="productMoreButton">Ver más</button>
                </Link>
            </div>
        </div>
    );
}

export default Item;
