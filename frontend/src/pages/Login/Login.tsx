import { FormLogin } from "../../components/FormLogin/FormLogin";
import { FormRegister } from "../../components/FormRegister/FormRegister";
import * as S from "./Login.style";

type Props = {};

export const Login = () => {
  return (
    <div style={{ height: "3000px" }}>
      <div style={{ fontSize: "rem" }}>
        <FormLogin />
      </div>
    </div>
  );
};
