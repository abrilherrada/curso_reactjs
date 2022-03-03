import '../styles/ItemListContainer.css';
import ItemList from './ItemList';

function ItemListContainer({greeting}) {
    return (
        <>
            <h2 className="ContainerTitle">{greeting}</h2>
            <ItemList/>
        </>
    )
}

export default ItemListContainer