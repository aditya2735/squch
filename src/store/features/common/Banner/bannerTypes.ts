export const FETCH_ALL_BANNERS = 'banner/fetchAll';

export interface BannerProps {
    id: number;
    image: string;
};

export interface BannerState {
    loading: boolean;
    banner: BannerProps[];
    error: string | null;
};
