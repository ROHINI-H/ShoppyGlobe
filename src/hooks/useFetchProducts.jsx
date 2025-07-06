import { useEffect } from "react";
import { useState } from "react";

function useFetchProducts() {
    const [product, setProduct] = useState([]);
    // For error Handling
    const [error, setError] = useState(null);
    // For loading UI
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch and store the fetched products
        const getProducts = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products');
                if (!res.ok) throw new Error('Failed to fetch products');
                const data = await res.json();
                setProduct(data.product);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        getProducts();
    }, []);

    return { product, error, loading };
}

export default useFetchProducts;