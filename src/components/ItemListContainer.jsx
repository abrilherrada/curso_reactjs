import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemList from './ItemList';
import '../styles/ItemListContainer.css';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore()
        if (id) {
            const queryCollection = collection(db, 'products')
            const queryFilter = query(queryCollection, where('category', '==', id))
            getDocs(queryFilter)
            .then((response) => {
                setProducts(response.docs.map(prod => ({id: prod.id, ...prod.data()})))
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        }
        else {
            const queryCollection = collection(db, 'products')
            getDocs(queryCollection)
            .then(response => {
                setProducts(response.docs.map(prod => ({id: prod.id, ...prod.data()})))
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        }
    }, [id])

    return (
        <>
            <h2 className="ContainerTitle">¡Te damos la bienvenida!</h2>
            {loading ? <div className='loadingContainer'><img className="loading" src='/images/loading.gif' alt=''></img></div> : <ItemList products={products}/>}
        </>
    )
}

export default ItemListContainer