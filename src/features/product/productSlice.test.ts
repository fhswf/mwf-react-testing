import { describe, expect, it, vi } from 'vitest';
import { store } from '../../store';
import productReducer, { initialState } from './productSlice';
import { fetchProducts } from './productActions';
import { Product } from '../../models/Product';
import axios from 'axios';

vi.mock('axios');

describe('productSlice', () => {

    it('Initialize slice with initialValue', () => {

        const state = productReducer(
            initialState, 
            { type: 'unknown' }
        );

        expect(state).toBe(initialState);

    });

    it ('fetch products pending', () => {

        const products: Product[] = [
            { id: 1, name: 'Mock Product', description: '', price: 1.0, type: 'Mock' }
        ];

        vi.mocked(axios.get).mockResolvedValue({
            data: products,
            status: '200'
        });

        store.dispatch(fetchProducts());

        const { loading } = store.getState().products;

        expect(loading).toBe(true);
        
    });

    it ('fetch products failed', async () => {

        
        vi.mocked(axios.get).mockRejectedValueOnce(new Error('Endpoint not found'));

        const result = await store.dispatch(fetchProducts());
        
        expect(result.type).toBe('product/fetchProducts/rejected2')
        expect(result.payload).toBe('Endpoint not found')
        
    });

    it ('fetch products successful', async () => {

        const products: Product[] = [
            { id: 1, name: 'Mock Product', description: '', price: 1.0, type: 'Mock' }
        ];

        vi.mocked(axios.get).mockResolvedValue({
            data: products,
            status: '200'
        });

        const result = await store.dispatch(fetchProducts());
        //const products = result.payload;

        expect(result.type).toBe('product/fetchProducts/fulfilled')
        expect(result.payload).toBe(products);

    });

})