import { useParams } from "react-router-dom";

// type Props = {};

export const Users = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};
