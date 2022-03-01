import '../styles/ItemListContainer.css';
import ItemCard from './ItemCard';

function ItemListContainer({greeting}) {
    return (
        <>
            <h2 className="ContainerTitle">{greeting}</h2>
            <ItemCard stock={5} initial={1}/>
        </>
    )
}

export default ItemListContainer