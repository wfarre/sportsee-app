import ActivityFactory from "../Factories/ActivityFactory";
import { useFetch } from "../utils/hooks";
import { useParams } from "react-router";

function Activity() {
  const { id } = useParams();
  const userId = { id }.id;
  const url = "http://localhost:5000/user/" + userId + "/activity";

  const [data, isLoaded, error] = useFetch(url, ActivityFactory, "api");

  return JSON.stringify(data._sessions);
}

export default Activity;
