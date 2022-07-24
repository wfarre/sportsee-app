import AverageSessionsFactory from "../Factories/AverageSessionsFactory";

import { useFetch } from "../utils/hooks";
import { useParams } from "react-router";

function AverageSessions() {
  const { id } = useParams();
  const userId = { id }.id.slice(1, { id }.id.length);
  const url = "http://localhost:5000/user/" + userId + "/average-sessions";

  const [data, isLoaded, error] = useFetch(url, AverageSessionsFactory, "api");

  console.log(data);

  return (
    <div className="data data--activity">
      <div>{JSON.stringify(data._sessions)}</div>
    </div>
  );
}

export default AverageSessions;
