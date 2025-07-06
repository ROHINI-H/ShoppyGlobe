import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { clearCart } from "../utils/cartSlice";

function Checkout() {
    const dispatch = useDispatch();

    // Clears the cart after checkout
    useEffect(() => {
        dispatch(clearCart());
    }, [dispatch]);

    return (
        <div>
            <h1>Thank You for Shopping!</h1>
            <p>Your order has been placed.</p>
        </div>
    )
}

export default Checkout;