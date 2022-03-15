import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemList from './ItemList';
import getItem from "../getItem";
import '../styles/ItemListContainer.css';

function ItemListContainer({greeting}) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            getItem
            .then((response) => {
                setProducts(response.filter(prod => prod.category === id))
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        }
        else {
            getItem
            .then((response) => {
                setProducts(response)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        }
    }, [id])

    return (
        <>
            <h2 className="ContainerTitle">{greeting}</h2>
            {loading ? <div className='loadingContainer'><img className="loading" src='/images/loading.gif' alt=''></img></div> : <ItemList products={products}/>}
        </>
    )
}

export default ItemListContainer