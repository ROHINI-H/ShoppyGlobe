import { useState, useEffect } from "react";
import { addItem } from "../utils/cartSlice";
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function ProductDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);

    // fetch the product based on the id
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className="mx-30 mt-10 flex flex-col justify-center md:flex-row gap-10 p-5">
            <img src={product.thumbnail} alt="" className="w-full md:w-1/3 rounded" />
            <div className="my-10 mx-20">
                <h1 className="text-3xl font-semibold mb-5">{product.title}</h1>
                <p className="text-gray-700 mb-2">{product.description}</p>
                <p className="text-xl font-semibold mb-4">${product.price}</p>
                <button className="bg-emerald-600 text-white px-3 py-1 rounded hover:bg-emerald-900" onClick={() => dispatch(addItem(product))}>Add to Cart</button>
                <Link to="/" className="text-blue-500 hover:underline block mt-10">Add more items</Link>
            </div>
        </div>
    )
}

export default ProductDetail;