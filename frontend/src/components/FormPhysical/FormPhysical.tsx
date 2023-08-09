import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormPhysical } from "./useFormPhysical";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const FormPhysical = () => {
  const { id } = useParams();

  const {
    handleSubmit,
    setValue,
    register,
    handleFormSubmit,
    isSubmitting,
    errors,
  } = useFormPhysical();

  useEffect(() => {
    if (id) {
      setValue("userId", id);
    }
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          type="number"
          placeholder="Altura"
          {...register("height", {
            valueAsNumber: true,
          })}
        />
        {errors.height && <span> {errors.height?.message}</span>}

        <input
          type="number"
          {...register("weight", {
            valueAsNumber: true,
          })}
        />
        {errors.weight && <span> {errors.weight?.message}</span>}

        <input
          type="number"
          {...register("imc", {
            valueAsNumber: true,
          })}
        />
        {errors.imc && <span> {errors.imc?.message}</span>}

        <input
          type="number"
          {...register("currentFat", {
            valueAsNumber: true,
          })}
        />
        {errors.currentFat && <span> {errors.currentFat?.message}</span>}

        <input
          type="number"
          {...register("idealFat", {
            valueAsNumber: true,
          })}
        />
        {errors.idealFat && <span> {errors.idealFat?.message}</span>}

        <input type="text" {...register("goal")} />
        {errors.goal && <span> {errors.goal?.message}</span>}

        <input type="text" {...register("observation")} />
        {errors.goal && <span> {errors.goal?.message}</span>}

         <input type="date" {...register("evaluationDate")} /> 

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <h1>env</h1> : <h1>SUB</h1>}
        </button>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};
