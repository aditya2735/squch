export const GET_ALL_POPULAR_BRANDS = "martBrands/getPopularBrands";
export const GET_ALL_DISOUNTED_BRANDS = "martBrands/getDiscountedBrands";
export const GET_ALL_PROMOTIONAL_BRANDS = "martBrands/getPromotionalBrands";

export interface BrandsProps {
    id: number;
    image: string;
};

export interface BrandState {
    loading: boolean;
    popularBrands: BrandsProps[];
    discountedBrands: BrandsProps[];
    promotionalBrands: BrandsProps[];
    error?: string | null;
};