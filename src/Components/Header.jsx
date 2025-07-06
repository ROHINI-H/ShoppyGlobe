import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

function Header() {
    // gets the length of the cart
    const length = useSelector(state => state.cart.items.length);

    return (
        <header>
            <div>
                <Link to="/">ShoppyGlobe</Link>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/cart">Cart ({length})</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;