import axios from "axios";
const baseUrl = "https://stage-api.squch.com";
const getToken = () => localStorage.getItem("token");
const getRefreshToken = () => localStorage.getItem("refresh_token");

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "ngrok-skip-browser-warning": "69420",
    modes: "CORS",
  },
});

// instance

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = getToken();

//     if (token) {
//       config.headers.Authorization = `${token}`;
//     }
//     config.headers["ngrok-skip-browser-warning"] = "69420";
//     config.headers["modes"] = "CORS";
//     return config;
//   },
//   // (error) => Promise.reject(error)
//   (error) => console.log(error)
// );

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     // Check if the error is due to an expired token
//     if (error.response.status === 403 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const refreshToken = getRefreshToken();
//       if (refreshToken) {
//         try {
//           const response = await axios.post(
//             `${baseUrl}/api/dev/admin/auth/refreshtoken`,
//             {
//               refreshToken: refreshToken,
//             }
//           );

//           const { accessToken } = response.data.data;

//           // Store the new access token
//           localStorage.setItem("token", accessToken);

//           // Update the Authorization header for the retry
//           axiosInstance.defaults.headers.common[
//             "Authorization"
//           ] = `${accessToken}`;
//           originalRequest.headers["Authorization"] = `${accessToken}`;

//           // Retry the original request with the new token
//           return axiosInstance(originalRequest);
//         } catch (refreshError) {
//           // Handle failure to refresh the token
//           localStorage.removeItem("token");
//           localStorage.removeItem("refresh_token");

//           // Dispatch logout action
//           // dispatch(logout());

//           // Redirect to login
//           window.location.href = "/authentication/sign-in";
//           return Promise.reject(refreshError);
//         }
//       } else {
//         // No refresh token available
//         localStorage.removeItem("token");
//         localStorage.removeItem("refresh_token");
//         localStorage.removeItem("user");

//         // Dispatch logout action
//         // dispatch(logout());

//         // Redirect to login
//         window.location.href = "/authentication/sign-in";
//         return Promise.reject(error);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
