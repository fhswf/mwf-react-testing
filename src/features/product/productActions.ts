import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../../models/Product';

const fetchProducts = createAsyncThunk<Product[], void, { rejectValue: string }>(
    'product/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get<Product[]>('http://localhost:3001/products');
            const products = response.data;
            return products;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export {
    fetchProducts
};