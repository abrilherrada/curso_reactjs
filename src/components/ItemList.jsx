import {useState, useEffect} from 'react';
import Item from "./Item";
import productsAPI from "../productsAPI";
import '../styles/Item.css';

function ItemList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productsAPI
        .then((response) => {
            setProducts(response)
        })
        .catch(error => console.log(error))
    }, [])
    console.log(products)

    return (
        <div className="productContainer">
            {products.map(product => 
                <Item key={product.id} title={product.title} author={product.author} price={product.price} description={product.description} stock={product.stock} picture={product.pictureURL} initial={1}/>
            )}
        </div>
    )
}

export default ItemList