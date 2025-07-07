import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

function Header() {
    // gets the length of the cart
    const length = useSelector(state => state.cart.items.length);

    return (
        <header className='bg-sky-900 text-white p-5 px-15 shadow-md'>
            <div className='mx-auto flex justify-between items-center'>
                <Link to="/" className='text-xl font-semibold'>ShoppyGlobe</Link>
                <nav className='flex gap-5'>
                    <Link to="/">Home</Link>
                    <Link to="/cart">Cart ({length})</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;