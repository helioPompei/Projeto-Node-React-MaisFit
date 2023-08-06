import { AxiosError } from "axios";
import { ILoginData } from "../@types/LoginType";
import { IRegisterData } from "../@types/RegisterType";
import { api } from "./api";

const register = async (data: Omit<IRegisterData, "confirm">) => {
  try {
    const response = await api.post("/user/register", data);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }

    console.log("Handle Register Error: ", error);
  }
};

const login = async (data: ILoginData) => {
  try {
    const response = await api.post("/user/login", data);
    console.log(response);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return new Error(error.response?.data.message);
    }

    console.log("Handle Login Error: ", error);
  }
};

const logout = () => {
  localStorage.removeItem("token");
};

export const authService = {
  register,
  login,
  logout,
};
