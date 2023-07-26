import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { authService } from "../../services/authService";
import { RegisterData, registerSchema } from "./RegisterSchema";

export const useFormRegister = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterData>({ resolver: zodResolver(registerSchema) });

  const handleFormSubmit = async (data: RegisterData) => {
    const response = await authService.register(data);
    if (response?.status === 201) {
      toast.success("Cadastrado com sucesso");
      reset();
    } else {
      toast.error(response.message);
    }
  };

  return {
    register,
    handleSubmit,
    handleFormSubmit,
    errors,
    isSubmitting,
  };
};
