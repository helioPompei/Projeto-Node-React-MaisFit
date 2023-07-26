import { AxiosError } from "axios";
import { api } from "./api";

interface IRegisterProps {
  name: string;
  email: string;
  password: string;
}

type ILoginProps = Omit<IRegisterProps, "name">;

const register = async (data: IRegisterProps) => {
  try {
    const response = await api.post("/user/register", data);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }

    console.log("Handle: ", error);
  }
};

const login = async (data: ILoginProps) => {
  try {
    await api.post("/user/login", data);
  } catch (error) {}
};

export const authService = {
  register,
  login,
};
