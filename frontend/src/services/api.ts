import axios from "axios";
import { getTokenLocalStorage } from "../utils/getTokenLocalStorage";
import { store, useTypedDispatch } from "../store/store";
import { setToken } from "../store/slices/auth";

type tokenData = {
  token: string;
  role: "MEMBER" | "ADMIN" | null;
} | null;

const tokenData: tokenData = getTokenLocalStorage();
const BASE_URL = "http://localhost:3333/";

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const apiPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// Send Token with request
apiPrivate.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    config.headers["Authorization"] = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Axios interceptor to handle expired tokens
apiPrivate.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return refreshAccessToken().then((token) => {
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return axios(originalRequest);
      });
    }

    return Promise.reject(error);
  }
);

// Function to refresh the access token using the refresh token
async function refreshAccessToken() {
  // const {
  //   data: { access_token: accessToken },
  // } = await apiPrivate.post(refreshTokenEndpoint, {
  //   refresh_token: refreshToken,
  // });
  // return accessToken;

  try {
    const response = await apiPrivate.patch("/user/token/refresh", {});
    console.log("response", response.data.token);

    // store.dispatch(setToken(response.data.token));
    localStorage.setItem("token", response?.data.token);
    

    return response.data.token;
  } catch (error) {
    console.log("error", error);
  }
}

// const register = async () => {
//   try {
//     const response = await api.post("/user/register", data);
//     return response;
//   } catch (error) {
//     if (error instanceof AxiosError) {
//       return error.response?.data;
//     }

//     console.log("Handle Register Error: ", error);
//   }
// };
