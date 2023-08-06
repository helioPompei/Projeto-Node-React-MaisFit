import { useEffect } from "react";
import { getMyProfile } from "../../store/slices/user";
import { useTypedDispatch } from "../../store/store";

type Props = {};

export const Students = () => {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(getMyProfile());
  }, []);

  return (
    <div style={{ height: "3000px" }}>
      <div style={{ fontSize: "rem" }}>
        <h1>students crud</h1>
      </div>
    </div>
  );
};
