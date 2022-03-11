import {useState, useEffect} from 'react';
import ItemDetail from "./ItemDetail";
import getItem from "../getItem";
import '../styles/Item.css';

function ItemDetailContainer() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getItem
        .then((response) => {
            setProducts(response)
        })
        .catch(error => console.log(error))
    }, [])
    console.log(products)

    return (
        <div className="productContainer">
            <ItemDetail key={products.id} title={products.title} author={products.author} price={products.price} description={products.description} stock={products.stock} picture={products.pictureURL} initial={1}/>
        </div>
    )
}

export default ItemDetailContainer