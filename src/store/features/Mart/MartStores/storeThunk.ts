import { createAsyncThunk } from "@reduxjs/toolkit";
import { FavouriteStoreProps, GET_ALL_MART_STORE, GET_STORE_DETAILS, GET_STORE_REVIEWS, GET_TOP_RATED_STORE, MARK_STORE_FAVOURITE, MARK_STORE_FAVOURITE_FROM_DETAIL, MartStoreProps, RatingReviewProps, TopRatedProps } from "./storeTypes";
import {  fetchAllMartStores, fetchStoreDetails, fetchStoreReview, fetchTopRated, storeFavourite } from "@/services/mart/service";



export const getMartStores = createAsyncThunk<MartStoreProps[], string, { rejectValue: string }>(
    GET_ALL_MART_STORE,
    async (listType, { rejectWithValue }) => {
        try {
            const stores = await fetchAllMartStores(listType);
            return stores.data.data
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to fetch Banners");
        }
    }
);

export const getStoreDetail = createAsyncThunk<MartStoreProps, string, { rejectValue: string }>(
    GET_STORE_DETAILS,
    async (id, { rejectWithValue }) => {
        try {
            const details = await fetchStoreDetails(id);
            return details.data.data;
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to get store details");
        }
    }
);

export const getTopRatedStores = createAsyncThunk<MartStoreProps[], TopRatedProps, { rejectValue: string }>(
    GET_TOP_RATED_STORE,
    async (data, { rejectWithValue }) => {
        try {
            const stores = await fetchTopRated(data);
            return stores.data;
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to get top rated stores");
        }
    }
);

export const makeStoreFavourite = createAsyncThunk<{ storeId: number, status: boolean }, FavouriteStoreProps, { rejectValue: string }>(
    MARK_STORE_FAVOURITE,
    async (data, { rejectWithValue }) => {
        try {
            const result = await storeFavourite(data);
            return result.data;
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to mark store favourite");
        }
    }
);

export const makeStoreFavouriteFromDetail = createAsyncThunk<{ storeId: number, status: boolean }, FavouriteStoreProps, { rejectValue: string }>(
    MARK_STORE_FAVOURITE_FROM_DETAIL,
    async (data, { rejectWithValue }) => {
        try {
            const result = await storeFavourite(data);
            return result.data;
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to mark store favourite");
        }
    }
);

export const getStoreReviews = createAsyncThunk<RatingReviewProps, { storeId: number |string }, { rejectValue: string}>(
    GET_STORE_REVIEWS,
    async ({storeId}, { rejectWithValue }) => {
        try {
            const result = await fetchStoreReview(storeId)
            return result.data?.[0];
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to get store reviews");
        }
    }
);