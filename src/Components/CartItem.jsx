import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../utils/cartSlice';


function CartItem({ item }) {
    const dispatch = useDispatch();

    return (
        <div className='border-2 border-amber-900 m-5 p-5 rounded-lg flex justify-between items-center'>
            <div>
                <h2 className='font-semibold text-lg'>{item.title}</h2>
                <p>Rs.{item.price}</p>
                <input className='border-2 border-amber-600 w-15 mt-3 rounded p-1 text-center' type="number" value={item.quantity} onChange={e => dispatch(updateQuantity({ id: item.id, quantity: +e.target.value }))} min="1" />
            </div>
            <button className='text-red-500 cursor-pointer ' onClick={() => dispatch(removeItem(item.id))}>Remove</button>
        </div>
    )
}

export default CartItem;