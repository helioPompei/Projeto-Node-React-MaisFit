import { FormRegister } from "../../components/FormRegister/FormRegister";
import * as S from "./Home.style";

type Props = {};

export const Home = () => {
  return (
    <div style={{ height: "3000px" }}>
      <div style={{ fontSize: "rem" }}>
        <FormRegister />
      </div>
    </div>
  );
};
