import { useDispatch, useSelector } from "react-redux";
//import { useCart } from "../../contexts/CartContext";
import { Product } from "../../models/Product";
import { CartItem } from "../../models/CartItem";
import { addToCart, removeFromCart } from "../../features/cart/cartSlice";
import { RootState } from "../../store";

const QuantitySelector = ({ product }: { product: Product}) => {
    
    const dispatch = useDispatch();

    const cartItem = useSelector((state: RootState) => state.cart.cartItems.find((item: CartItem) => item.product.id === product.id));

    //const cartItem: CartItem = { product: product, quantity: 1 };

    if (!cartItem)
        return <button onClick={() => dispatch(addToCart(product))} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add to Cart</button>

    return (
        <div className="flex gap-3">
			<button type="button" onClick={() => dispatch(removeFromCart(product))} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">-</button>
			<input type="text" value={cartItem.quantity} data-testid="quantity" name="quantity" id="quantity" className="block w-10 text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:text-gray-900 sm:text-sm sm:leading-6" />
			<button type="button" onClick={() => dispatch(addToCart(product))} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">+</button>
		</div>
    );
};

export { QuantitySelector };