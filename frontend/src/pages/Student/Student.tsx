import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getAllProfiles,
  getOneProfile,
} from "../../store/slices/userSlice/userAsyncThunks";
import { useTypedDispatch, useTypedSelector } from "../../store/store";

export const Student = () => {
  const { id } = useParams();
  const dispatch = useTypedDispatch();

  console.log(id);

  const { students } = useTypedSelector((state) => state.user);

  const student = students?.find((student) => student.id === id);

  useEffect(() => {
    if (id) {
      dispatch(getAllProfiles());
      dispatch(getOneProfile(id));
    }
  }, []);

  return (
    <div style={{ height: "3000px" }}>
      <div style={{ fontSize: "rem" }}>
        <h1>{student?.email}</h1>
      </div>
    </div>
  );
};
