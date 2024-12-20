import { createAsyncThunk, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../models/Product';
import axios from 'axios';
import { RootState } from '../../store';

interface ProductState {
    loading: boolean;
    products: Product[];
    error: string;
};

export const initialState: ProductState = {
    loading: false,
    products: [],
    error: ''
};

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

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        productsFetching: (state) => {
            state.loading = true;
        },
        productsFetched: (state, action: PayloadAction<Product[]>) => {
            state.loading = false;
            state.products = action.payload;
        },
        productsFailed: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    }
});

// Selectors
const getProductState = (state: RootState) => state.products;

const getProducts = createSelector(
    [getProductState],
    (state) => state.products
);

const getLoading = createSelector(
    [getProductState],
    (state) => state.loading
);

const getError = createSelector(
    [getProductState],
    (state) => state.error
);

export const { productsFetching, productsFetched, productsFailed } = productSlice.actions;
export { fetchProducts, getProducts, getLoading, getError };
export { productSlice };
export default productSlice.reducer;