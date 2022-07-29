import PerformanceFactory from "../Factories/PerformanceFactory";
import { useFetch } from "../utils/hooks";
import { useParams } from "react-router";

function Activities() {
  const { id } = useParams();
  const userId = { id }.id;
  const url = "http://localhost:5000/user/" + userId + "/performance";

  const [data, isLoaded, error] = useFetch(url, PerformanceFactory, "api");

  return JSON.stringify(data);
}

export default Activities;
