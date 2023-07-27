import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ILoginData } from "../../@types/LoginType";
import { login } from "../../store/slices/auth";
import { useTypedDispatch } from "../../store/store";
import { loginSchema } from "./LoginSchema";

export const useFormLogin = () => {
  const dispatch = useTypedDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ILoginData>({ resolver: zodResolver(loginSchema) });

  const handleFormSubmit = async (data: ILoginData) => {
    await dispatch(login(data));
  };

  return {
    register,
    handleSubmit,
    handleFormSubmit,
    errors,
    isSubmitting,
  };
};
