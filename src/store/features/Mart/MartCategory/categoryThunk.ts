import { createAsyncThunk } from "@reduxjs/toolkit";
import { CategoryProps, GET_ALL_MART_CATRGORIES } from "./categoryTypes";
import { fetchAllMartCategories } from "@/services/mart/service";



export const getAllMartCategory = createAsyncThunk<CategoryProps[], string, { rejectValue: string }>(
    GET_ALL_MART_CATRGORIES,
    async (categories, { rejectWithValue }) => {
        try {
            const category = await fetchAllMartCategories(categories);
            return category.data.data;
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to fetch Categories");
        }
    }
);