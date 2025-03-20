export const GET_ALL_MART_OFFER = "martOffer/getAll";
export const GET_OFFER_DETAILS = "martOffer/getOfferDetail";

export interface OfferProps{
    id: number;
    offerImage: string;
    title?: string;
    offerCode?: string;
    redirect_url: string;
};

export interface OfferStateProps {
    loading: boolean;
    offer: OfferProps[] | null;
    error?: string | null;
};