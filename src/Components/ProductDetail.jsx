import { useState, useEffect } from "react";
import { addItem } from "../utils/cartSlice";
import { useParams } from 'react-router-dom';
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
        <div>
            <img src={product.thumbail} alt="" />
            <div>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <button onClick={() => dispatch(addItem(product))}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductDetail;