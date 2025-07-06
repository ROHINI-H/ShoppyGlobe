import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const items = useSelector(state => state.cart.items);
    const navigate = useNavigate();

    // Calculate the total price of the items in the cart
    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            <h1>Your Cart</h1>
            {items.length == 0 ? (
                <p>You cart is empty...</p>
            ) : (
                <>
                    {items.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    <div>
                        <p>Total: Rs.{totalPrice.toFixed(2)}</p>
                        <button onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Cart;