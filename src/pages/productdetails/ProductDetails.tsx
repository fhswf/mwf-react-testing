import { useParams } from "react-router-dom";

const ProductDetails = () => {

    const { id } = useParams<{ id: string }>();

    const product = {
        id: 1,
        name: 'Test',
        description: 'Test',
        price: 2.5
    };

    return (
        <div>
            <h1>Product Details {id}</h1>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    );
};

export { ProductDetails };