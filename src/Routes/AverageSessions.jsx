import AverageSessionsFactory from "../Factories/AverageSessionsFactory";

import { useFetch } from "../utils/customHooks";
import { useParams } from "react-router";

function AverageSessions() {
  const { id } = useParams();
  const userId = { id }.id;
  const url = "http://localhost:5000/user/" + userId + "/average-sessions";

  const [data, isLoaded, error] = useFetch(url, AverageSessionsFactory, "api");

  return JSON.stringify(data._sessions);
}

export default AverageSessions;
