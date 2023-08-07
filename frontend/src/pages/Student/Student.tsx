import { useEffect } from "react";
import { getAllProfiles } from "../../store/slices/userSlice/user";
import { useTypedDispatch, useTypedSelector } from "../../store/store";
import { useParams } from "react-router-dom";
import { getMyProfile } from "../../store/slices/userSlice/userAsyncThunks";

type Props = {};

export const Student = () => {
  const { id } = useParams();
  const dispatch = useTypedDispatch();


  useEffect(() => {
    dispatch(getMyProfile());
  }, []);

  return (
    <div style={{ height: "3000px" }}>
      <div style={{ fontSize: "rem" }}>
        
      </div>
    </div>
  );
};
