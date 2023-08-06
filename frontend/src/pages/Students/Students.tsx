import { useEffect } from "react";
import { getAllProfiles } from "../../store/slices/userSlice/user";
import { useTypedDispatch, useTypedSelector } from "../../store/store";

type Props = {};

export const Students = () => {
  const dispatch = useTypedDispatch();
  const { students } = useTypedSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllProfiles());
  }, []);

  return (
    <div style={{ height: "3000px" }}>
      <div style={{ fontSize: "rem" }}>
        {
          students && (students.map((student) => (
            <div> <h1>{student.id}</h1> <h2>{student.name}</h2> </div>
          )))
        }
      </div>
    </div>
  );
};
