import { createSlice } from "@reduxjs/toolkit";
import { CategoryStateProps } from "./categoryTypes";
import { getAllMartCategory } from "./categoryThunk";


const initialSate: CategoryStateProps = {
    loading: false,
    categories: [],
    error: null
};

const handleAsyncActions = (
    builder: any,
    action: any,
    stateKey: string,
    extraKey?: string
) => {
    builder
        .addCase(action.pending, (state: any) => {
            state.loading = true;
        })
        .addCase(action.fulfilled, (state: any, action: any) => {
            state[stateKey] = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(action.rejected, (state: any, action: any) => {
            state.loading = false;
            state.error = action.payload || `Failed to fetch ${extraKey || stateKey}`;
        });
};


const CategorySlice = createSlice({
    name: 'martCategory',
    initialState: initialSate,
    reducers: {},
    extraReducers: (builder) => {
        handleAsyncActions(builder, getAllMartCategory, "categories");
    }
});

export default CategorySlice.reducer;