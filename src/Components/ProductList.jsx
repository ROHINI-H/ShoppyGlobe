import { useState } from 'react';
import ProductItem from './ProductItem';
import useFetchProducts from '../hooks/useFetchProducts';

function ProductList() {
    const [search, setSearch] = useState('');

    const { products, error, loading } = useFetchProducts();

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