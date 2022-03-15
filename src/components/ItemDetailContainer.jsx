import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import getItem from "../getItem";
import '../styles/Item.css';

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        getItem
        .then((response) => {
            setProduct(response.find(prod => prod.id === parseInt(id)))
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [id])

    return (
        <div className="productContainer">
            {loading ? <div className='loadingContainer'><img className="loading" src='/images/loading.gif' alt=''></img></div> : <ItemDetail product={product}/>}
        </div>
    )
}

export default ItemDetailContainer