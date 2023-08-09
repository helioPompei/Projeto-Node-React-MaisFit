import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FormPhysical } from "../../components/FormPhysical/FormPhysical";
import {
  getAllProfiles,
  getOneProfile,
} from "../../store/slices/userSlice/userAsyncThunks";
import { useTypedDispatch, useTypedSelector } from "../../store/store";
import { getAllUserPhysicals } from "../../store/slices/physicalSlice/userAsyncThunks";

export const Student = () => {
  const { id } = useParams();
  const dispatch = useTypedDispatch();

  const { students } = useTypedSelector((state) => state.user);

  const student = students?.find((student) => student.id === id);

  useEffect(() => {
    if (id) {
      dispatch(getAllProfiles());

      dispatch(getOneProfile(id));

      dispatch(getAllUserPhysicals(id));
    }
  }, []);

  return (
    <div style={{ height: "3000px" }}>
      <div style={{ fontSize: "rem" }}>
        <div style={{ border: "1px solid black" }}>
          <p>{student?.email}</p>
          <p>{student?.createdAt}</p>
          <p>{student?.email}</p>
          <p>{student?.name}</p>
          <p>{student?.sex}</p>
        </div>
        <FormPhysical />
        <div></div>
      </div>
    </div>
  );
};
