export const FETCH_ALL_BANNERS = 'banner/fetchAll';

export interface BannerProps {
    bannerId: number;
    images: string[];
    title: string;
    bannerType: string;
    isCurrent: boolean;
    redirectUrl: string | null;
    relavantSection: string;
};

export interface BannerState {
    loading: boolean;
    banner: BannerProps[];
    error: string | null;
};
