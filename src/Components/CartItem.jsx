import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../utils/cartSlice';


function CartItem({ item }) {
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <h2>{item.title}</h2>
                <p>Rs.{item.price}</p>
                <input type="number" value={item.quantity} onChange={e => dispatch(updateQuantity({ id: item.id, quantity: +e.target.value }))} min="1" />
            </div>
            <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
        </div>
    )
}

export default CartItem;