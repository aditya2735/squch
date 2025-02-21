export const GET_ADDRESS_LIST = "address/address-list";
export const ADD_DELIVERY_ADDRESS = "address/add-delivery-address";

export interface AddressProps {
    id: number;
    userId: number;
    houseNumber: number;
    area: string;
    details: string;
    zipCode: number;
    landmark: string;
    adresstype: string | null;
    country: string;
    city: string;
    state: string;
    addressAlias: string;
    location: string | null;
    number: string | null;
    createdAt: string;
    updatedAt: string;
};

export interface NewAddressProps {
    houseNumber: string;
    additionalInfo: string;
    addressType: string;
    receiverPhone: string;
    area: string;
    details: string;
    zipCode: string;
    landmark: string;
    addressAlias: string;
    city: string;
    state: string;
    location?: [number, number];
    country: string;
}

export interface AddressStateProps {
    loading: boolean;
    addresses: AddressProps[];
    error: string | null;
};
