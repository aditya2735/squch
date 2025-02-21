const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


const ENDPOINTS = {
    COMMON: {
        ADDRESS: {
            GET_ADDRESS_LIST: `${API_BASE_URL}/mart/address-list`,
            ADD_DELIVERY_ADDRESS: `${API_BASE_URL}/mart/add-delivery-address`
        }
    }
};

export { ENDPOINTS };