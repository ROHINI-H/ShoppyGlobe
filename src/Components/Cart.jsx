import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { Link, useNavigate } from 'react-router-dom';


function Cart() {
    const items = useSelector(state => state.cart.items);
    const navigate = useNavigate();

    // Calculate the total price of the items in the cart
    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            {items.length == 0 ? (
                <>
                    <h1 className='text-xl font-bold text-amber-950 m-5'>Your Cart is empty</h1>
                    <Link to="/" className="mx-5 text-blue-500 hover:underline block mt-5">Continue shopping</Link>
                </>
            ) : (
                <>
                    <h1 className='text-2xl font-semibold m-5'>Your Cart</h1>
                    {items.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    <div className='text-right m-5 mx-8'>
                        <p className='text-xl font-bold mb-2'>Total: Rs.{totalPrice.toFixed(2)}</p>
                        <button onClick={() => navigate('/checkout')} className='cursor-pointer bg-indigo-500 text-white px-5 py-3 rounded-xl hover:bg-indigo-800'>Proceed to Checkout</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Cart;