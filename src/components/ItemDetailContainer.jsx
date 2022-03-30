import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import '../styles/Item.css';
import { doc, getDoc, getFirestore } from "firebase/firestore"

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore()
        const queryFilter = doc(db, 'products', id)
        getDoc(queryFilter)
        .then(response => {
            setProduct({id: response.id, ...response.data()})
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