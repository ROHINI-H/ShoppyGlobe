import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

function ProductItem({ product }) {
    const dispatch = useDispatch();

    return (
        <div>
            <img src={product.thumbail} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <div>
                <Link to={`/product/${product.id}`}>View</Link>
                <button onClick={() => dispatch(addItem(product))}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductItem;