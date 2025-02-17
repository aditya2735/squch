import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
    (config: any) => {
        if (typeof window !== 'undefined') {
            const auth = localStorage.getItem("auth");
            const country = localStorage.getItem("country");
            const token = auth ? auth : null;

            if (config != undefined) {
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                if (country) {
                    config.headers['country'] = country;
                }
            }
        }

        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

// const ongoingRequests: { [key: string]: any } = {};

export const apiConnector = (
    method: 'get' | 'post' | 'put' | 'delete',
    url: string,
    bodyData?: any,
    headers = { "ngrok-skip-browser-warning": "69420" },
    params = {},
) => {
    // const abortController = new AbortController();
    // const signal = abortController.signal;

    // if (ongoingRequests[url]) {
    //     ongoingRequests[url].abort();
    // }

    // ongoingRequests[url] = abortController;

    const config = {
        method,
        url,
        data: bodyData || null,
        headers: { ...headers },
        params: params || {},
    };
    return axios(config)
        .then((response) => {
            // delete ongoingRequests[url];
            return response;
        }).catch((error) => {
 
            if (error.name === 'AbortError') {
                console.log('Request canceled:', error.message);
            } else {
                return Promise.reject(error);
            }
        });
};
