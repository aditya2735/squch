"use client";
import React, { lazy, Suspense, useEffect } from "react";

import GetAppsDownload from "../../common/GetAppsDownload";
import UserAuth from "../../common/UserAuth";
import SearchBar from "../../common/SearchBar";
import CategorySection from "./Category";

import { apiConnector } from "@/services/connector";
import Loader from "@/components/common/Loader"; 11
const Offer = lazy(() => import("./Offer"));
const TopRated = lazy(() => import("./TopRated"));
const HomeBanner = lazy(() => import("./Banner"));
const PopularBrands = lazy(() => import("./PopularBrands"));
const DiscountedBrands = lazy(() => import("./DiscountedBrands"));
const PromotionalBrands = lazy(() => import("./PromotionalBrands"));

import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { getAllMartOffer } from "@/store/features/Mart/MartOffer/offerThunk";
import { getAllBanners } from "@/store/features/Banner/bannerThunk";
import { getMartStores } from "@/store/features/Mart/MartStores/storeThunk";
import { getAllMartCategory } from "@/store/features/Mart/MartCategory/categoryThunk";
import { getDiscountedBrands } from "@/store/features/Mart/MartBrands/brandsThunks";
import DataLoader from "@/components/common/DataLoader";

const Mart: React.FC = () => {

    const dispatch = useAppDispatch();
    const { banner, loading: loadingBanners, error: errorBanners } = useAppSelector((state) => state.banner);
    const { offer, loading: loadingOffers, error: errorOffers } = useAppSelector((state) => state.martOffer);
    const { stores, loading: loadingStores, error: errorStores } = useAppSelector((state) => state.martStore);
    const { categories, loading: loadingCategories, error: errorCategories } = useAppSelector((state) => state.martCategory);

    const handleSearch = async (query: string) => {
        if (!query.trim()) return;
        const response = await apiConnector(
            "post",
            "http://localhost:8080/search",
            { data: query }
        );
    };

    useEffect(() => {
        dispatch(getAllBanners("mart"));
        dispatch(getAllMartOffer());
        dispatch(getMartStores("grocery"));
        dispatch(getAllMartCategory("grocery"));
        dispatch(getDiscountedBrands());
    }, [dispatch]);


    return (
        <div className="main-wrapper">
            <div className="container px-0 bg-dark-gray">
                <GetAppsDownload />

                <div className="wrapper-box">
                    <div className="gradient-1 px-40">
                        <UserAuth />

                        <SearchBar onSearch={handleSearch} placeHolder='Searcg "item Category" ' />

                        <HomeBanner banners={banner} />

                        <DataLoader loading={loadingOffers} error={errorOffers} retryFunction={() => dispatch(getAllMartOffer())}>
                            <Suspense fallback={<Loader />}>
                                <Offer offers={offer} />
                            </Suspense>
                        </DataLoader>


                        <DataLoader loading={loadingStores} error={errorStores} retryFunction={() => dispatch(getMartStores("grocery"))}>
                            <Suspense fallback={<Loader />}>
                                <TopRated stores={stores} />
                            </Suspense>
                        </DataLoader>

                        <DataLoader loading={loadingCategories} error={errorCategories} retryFunction={() => dispatch(getAllMartCategory("grocery"))}>
                            <Suspense fallback={<Loader />}>
                                <CategorySection categories={categories} />
                            </Suspense>
                        </DataLoader>

                        <PopularBrands />

                        <DiscountedBrands />

                        <PromotionalBrands />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Mart;
