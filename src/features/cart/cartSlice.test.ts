import { describe, expect, it } from 'vitest';
import cartReducer, { initialState, addToCart, removeFromCart } from './cartSlice';
import { Product } from '../../models/Product';

describe('cartSlice', () => {

    it('Initialize slice with initialValue', () => {

        const state = cartReducer(
            initialState, 
            { type: 'unknown' }
        );

        expect(state).toBe(initialState);

    });

    it ('add product to cart', () => {

        const product: Product = {
            id: 1,
            name: 'Mock Product',
            description: '',
            price: 1.0,
            type: 'Mock'
        };

        const stateAfterReducerAction = cartReducer(
            initialState,
            addToCart(product)
        );

        expect(stateAfterReducerAction.cartItems.length).toBe(1);
        expect(stateAfterReducerAction.cartItems[0].product).toBe(product);
        expect(stateAfterReducerAction.cartItems[0].quantity).toBe(1);

    });

    it ('increase quantity of product in cart', () => {

        const product: Product = {
            id: 1,
            name: 'Mock Product',
            description: '',
            price: 1.0,
            type: 'Mock'
        };

        let stateAfterReducerAction = cartReducer(
            initialState,
            addToCart(product)
        );

        expect(stateAfterReducerAction.cartItems.length).toBe(1);
        expect(stateAfterReducerAction.cartItems[0].product).toBe(product);
        expect(stateAfterReducerAction.cartItems[0].quantity).toBe(1);

        stateAfterReducerAction = cartReducer(
            stateAfterReducerAction,
            addToCart(product)
        );

        expect(stateAfterReducerAction.cartItems.length).toBe(1);
        expect(stateAfterReducerAction.cartItems[0].product).toBe(product);
        expect(stateAfterReducerAction.cartItems[0].quantity).toBe(2);

    });

    it ('decrease quantity of product in cart', () => {

        const product: Product = {
            id: 1,
            name: 'Mock Product',
            description: '',
            price: 1.0,
            type: 'Mock'
        };

        const stateAfterReducerAction = cartReducer(
            {
                cartItems: [
                    { product: product, quantity: 2 }
                ]
            },
            removeFromCart(product)
        );

        expect(stateAfterReducerAction.cartItems.length).toBe(1);
        expect(stateAfterReducerAction.cartItems[0].product).toBe(product);
        expect(stateAfterReducerAction.cartItems[0].quantity).toBe(1);

    });

    it ('remove product from cart', () => {

        const product: Product = {
            id: 1,
            name: 'Mock Product',
            description: '',
            price: 1.0,
            type: 'Mock'
        };

        const stateAfterReducerAction = cartReducer(
            {
                cartItems: [
                    { product: product, quantity: 1 }
                ]
            },
            removeFromCart(product)
        );

        expect(stateAfterReducerAction.cartItems.length).toBe(0);

    });

});