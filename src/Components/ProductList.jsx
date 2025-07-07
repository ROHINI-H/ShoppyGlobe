import { useState, useEffect } from 'react';
import ProductItem from './ProductItem';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // fetch the list of products from an API
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setProducts(data.products);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    // filter the product based on search
    const filtered = products.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='m-5'>
            <input className='border p-2 w-full mb-5' type="text" placeholder="Search products..." value={search} onChange={e => setSearch(e.target.value)} />
            <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-5'>
                {filtered.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;