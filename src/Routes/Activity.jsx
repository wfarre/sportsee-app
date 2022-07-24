import ActivityFactory from "../Factories/ActivityFactory";
import { useFetch } from "../utils/hooks";
import { useParams } from "react-router";

function Activity() {
  const { id } = useParams();
  const userId = { id }.id.slice(1, { id }.id.length);
  const url = "http://localhost:5000/user/" + userId + "/activity";

  const [data, isLoaded, error] = useFetch(url, ActivityFactory, "api");

  console.log(data);

  return (
    <div className="data data--activity">
      <div>{JSON.stringify(data._sessions)}</div>
    </div>
  );
}

export default Activity;
