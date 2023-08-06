import { AxiosError } from "axios";
import { apiPrivate } from "./api";

const getMyProfile = async () => {
  try {
    const response = await apiPrivate.get("/user/profile");
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }

    console.log("Handle Get My Profile Error: ", error);
  }
};

// const login = async (data: ILoginData) => {
//   try {
//     const response = await api.post("/user/login", data);
//     console.log(response);
//     return response;
//   } catch (error) {
//     if (error instanceof AxiosError) {
//       return new Error(error.response?.data.message);
//     }

//     console.log("Handle Login Error: ", error);
//   }
// };

export const userService = {
  getMyProfile,
  // login,
};
