import { useState, useEffect } from 'react';
import ProductItem from './ProductItem';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    // filter the book based on search
    const filtered = products.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <input type="text" placeholder="Search products..." value={search} onChange={e => setSearch(e.target.value)} />
            <div>
                {filtered.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;