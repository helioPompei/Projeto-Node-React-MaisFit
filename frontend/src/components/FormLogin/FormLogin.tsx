import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormLogin } from "./useFormLogin";

export const FormLogin = () => {
  const { handleSubmit, register, handleFormSubmit, isSubmitting, errors } =
    useFormLogin();

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input type="email" {...register("email")} />
        {errors.email && <span> {errors.email?.message}</span>}

        <input type="password" {...register("password")} />
        {errors.password && <span> {errors.password?.message}</span>}

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
