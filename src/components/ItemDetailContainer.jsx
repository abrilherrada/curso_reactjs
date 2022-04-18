import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import Loading from './Loading';
import ItemDetail from './ItemDetail';
import '../styles/css/ItemDetailContainer.css';

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const queryFilter = doc(db, 'products', id);
        getDoc(queryFilter)
            .then((response) => {
                if (response.data() !== undefined) {
                    setProduct({ id: response.id, ...response.data() });
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <div className="productContainer">
            {loading ? (
                <Loading />
            ) : product.length === 0 ? (
                <div>
                    <h2>
                        El producto que estás tratando de ver no está en nuestra
                        base de datos.
                    </h2>
                    <p className="noProduct">
                        Para ver nuestros productos disponibles, dirigite a la
                        página de inicio.
                    </p>
                    <Link to="/" className="landingLink">
                        <button className="landingButton">Ver productos</button>
                    </Link>
                </div>
            ) : (
                <ItemDetail product={product} />
            )}
        </div>
    );
}

export default ItemDetailContainer;
