import PerformanceFactory from "../Factories/PerformanceFactory";
import { useFetch } from "../utils/hooks";
import { useParams } from "react-router";

function Activities() {
  const { id } = useParams();
  const userId = { id }.id.slice(1, { id }.id.length);
  const url = "http://localhost:5000/user/" + userId + "/performance";

  const [data, isLoaded, error] = useFetch(url, PerformanceFactory, "api");

  console.log(data);

  return (
    <div className="data data--performance">
      <div>{JSON.stringify(data.activityData)}</div>
    </div>
  );
}

export default Activities;
