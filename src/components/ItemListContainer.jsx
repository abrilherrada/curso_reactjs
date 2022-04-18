import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    collection,
    getDocs,
    getFirestore,
    query,
    where,
} from 'firebase/firestore';
import Loading from './Loading';
import ItemList from './ItemList';
import '../styles/css/ItemListContainer.css';

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, 'products');
        const queryFilter = id
            ? query(queryCollection, where('category', '==', id))
            : queryCollection;
        getDocs(queryFilter)
            .then((response) => {
                setProducts(
                    response.docs.map((prod) => ({
                        id: prod.id,
                        ...prod.data(),
                    }))
                );
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <>
            <h2 className="containerTitle">¡Te damos la bienvenida!</h2>
            {loading ? (
                <Loading />
            ) : products.length === 0 ? (
                <div>
                    <h2>
                        La categoría que estás tratando de ver no está en
                        nuestra base de datos.
                    </h2>
                    <p className="noCategory">
                        Para ver nuestros productos disponibles, dirigite a la
                        página de inicio.
                    </p>
                    <Link to="/" className="landingLink">
                        <button className="landingButton">Ver productos</button>
                    </Link>
                </div>
            ) : (
                <ItemList products={products} />
            )}
        </>
    );
}

export default ItemListContainer;
