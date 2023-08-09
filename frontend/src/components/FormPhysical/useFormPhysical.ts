import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { physicalService } from "../../services/physicalService";
import { IPhysical } from "../../store/slices/physicalSlice/physicalDataType";
import { physicalSchema } from "./physicalSchema";

export const useFormPhysical = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<IPhysical>({ resolver: zodResolver(physicalSchema) });

  const handleFormSubmit = async (data: IPhysical) => {
    console.log("data", data);
    const response = await physicalService.createPhysical(data);
    if (response?.status === 201) {
      toast.success("Cadastrado com sucesso");
      reset();
    } else {
      toast.error(response.message);
    }
  };

  return {
    register,
    setValue,
    handleSubmit,
    handleFormSubmit,
    errors,
    isSubmitting,
  };
};
