"use client";
import React, { lazy, Suspense, useEffect } from "react";

import GetAppsDownload from "../../common/core/GetAppsDownload";
import UserAuth from "../../common/core/UserAuth";
import SearchBar from "../../common/core/SearchBar";
import CategorySection from "./Category";
import Loader from "@/components/common/core/Loader";

const Offer = lazy(() => import("./Offer"));
const TopRated = lazy(() => import("./TopRated"));
const HomeBanner = lazy(() => import("./Banner"));
const PopularBrands = lazy(() => import("./PopularBrands"));
const DiscountedBrands = lazy(() => import("./DiscountedBrands"));
const PromotionalBrands = lazy(() => import("./PromotionalBrands"));

import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { getAllMartOffer } from "@/store/features/Mart/MartOffer/offerThunk";
import { getAllBanners } from "@/store/features/common/Banner/bannerThunk";
import { getMartStores, getTopRatedStores, makeStoreFavourite } from "@/store/features/Mart/MartStores/storeThunk";
import { getAllMartCategory } from "@/store/features/Mart/MartCategory/categoryThunk";
import { getDiscountedBrands } from "@/store/features/Mart/MartBrands/brandsThunks";
import DataLoader from "@/components/common/core/DataLoader";
import { getAddressList } from "@/store/features/common/Address/addressThunk";
import { useRouter } from "next/navigation";
import NotificationButton from "@/components/common/core/NotificatioButton";


const Mart: React.FC = () => {

    const dispatch = useAppDispatch();
    const router = useRouter();
    const { banner } = useAppSelector((state) => state.banner);
    const { latLong } = useAppSelector((state) => state.address);
    const { offer, loading: loadingOffers, error: errorOffers } = useAppSelector((state) => state.martOffer);
    const { topRated, loading: loadingStores, error: errorStores } = useAppSelector((state) => state.martStore);
    const { categories, loading: loadingCategories, error: errorCategories } = useAppSelector((state) => state.martCategory);

    const handleSearch = async (query: string) => {
        if (!query.trim()) return;
    };

    const handleClick = (storeId: any) => {
        router.push(`/home/mart/store-detail/${storeId}`)
    }

    const handleFavourite = (event: React.MouseEvent, storeId: number, status: boolean) => {
        event.stopPropagation();
        const data = { userId: 2, storeId: storeId, status: !status }
        dispatch(makeStoreFavourite(data));
    };

    useEffect(() => {
        dispatch(getAllBanners("mart"));
        dispatch(getAllMartOffer({}));
        dispatch(getAllMartCategory("grocery"));
        dispatch(getDiscountedBrands());
        dispatch(getAddressList());
    }, []);

    useEffect(() => {
        if (latLong) {
            const data = {
                latitude: latLong.lat,
                longitude: latLong.long,
                type: "grocery"
            }
            dispatch(getTopRatedStores(data));
        }
    }, [dispatch, latLong]);


    return (
        <div className="main-wrapper">
            <div className="container px-0 bg-dark-gray">
                <GetAppsDownload />

                {/* <NotificationButton /> */}

                <div className="wrapper-box">
                    <div className="gradient-1 px-40">
                        <UserAuth />

                        <SearchBar
                            onSearch={handleSearch}
                            placeHolder='Searcg "item Category" '
                            debounceDelay={1000}
                        />

                        <HomeBanner banners={banner} />

                        <DataLoader loading={loadingOffers} error={errorOffers} retryFunction={() => dispatch(getAllMartOffer({}))} data={offer}>
                            <Suspense fallback={<Loader />}>
                                <Offer offers={offer} />
                            </Suspense>
                        </DataLoader>

                        <DataLoader loading={loadingStores.storeLoading} error={errorStores} retryFunction={() => dispatch(getMartStores("grocery"))} data={topRated}>
                            <Suspense fallback={<Loader />}>
                                <TopRated
                                    stores={topRated}
                                    handleClick={handleClick}
                                    handleFavourite={handleFavourite}
                                />
                            </Suspense>
                        </DataLoader>

                        <DataLoader loading={loadingCategories} error={errorCategories} retryFunction={() => dispatch(getAllMartCategory("grocery"))} data={categories}>
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
