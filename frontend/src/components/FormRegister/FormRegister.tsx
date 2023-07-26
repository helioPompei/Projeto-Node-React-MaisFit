import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormRegister } from "./useFormRegister";

export const FormRegister = () => {
  const { handleSubmit, register, handleFormSubmit, isSubmitting, errors } =
    useFormRegister();

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input type="text" placeholder="Nome" {...register("name")} />
        {errors.name && <span> {errors.name?.message}</span>}

        <input type="email" {...register("email")} />
        {errors.email && <span> {errors.email?.message}</span>}

        <input type="password" {...register("password")} />
        {errors.password && <span> {errors.password?.message}</span>}

        <input type="password" {...register("confirm")} />
        {errors.confirm && <span> {errors.confirm?.message}</span>}

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
