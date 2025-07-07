import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

function ProductItem({ product }) {
    const dispatch = useDispatch();

    return (
        <div className='border p-5 rounded shadow hover:shadow-lg transition'>
            <img src={product.thumbnail} alt={product.title} className='w-full h-40 object-cover mb-3' />
            <h2 className='font-semibold'>{product.title}</h2>
            <p className='text-sm text-gray-600'>${product.price}</p>
            <div className='flex justify-between items-center mt-3'>
                <Link to={`/product/${product.id}`} className='text-blue-700 hover:underline'>View details</Link>
                <button onClick={() => dispatch(addItem(product))} className='bg-emerald-600 text-white px-3 py-1 rounded hover:bg-emerald-900'>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductItem;