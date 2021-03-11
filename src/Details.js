import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();

  return <h1>{id}</h1>;
};

export default Details;
