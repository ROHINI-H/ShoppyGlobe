import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

function Checkout() {
    const dispatch = useDispatch();

    // Clears the cart after checkout
    useEffect(() => {
        dispatch(clearCart());
    }, [dispatch]);

    return (
        <div className="p-10 text-center">
            <h1 className="text-3xl font-black text-orange-500 mb-5">Thank You for Shopping!</h1>
            <p className="text-xl text-green-700">Your order has been placed.</p>
            <Link to="/" className="text-blue-500 hover:underline block mt-5">Go back to Home</Link>
        </div>
    )
}

export default Checkout;