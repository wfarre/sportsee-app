import UserFactory from "../Factories/UserFactory";
import { useFetch } from "../utils/hooks";
import { useParams } from "react-router";

function TodayScore() {
  const { id } = useParams();
  const userId = { id }.id.slice(1, { id }.id.length);
  const url = "http://localhost:5000/user/" + userId;

  const [userData, isLoaded, error] = useFetch(url, UserFactory, "user");

  return (
    <div className="data data--score">
      <div>{JSON.stringify(userData.todayScore)}</div>
    </div>
  );
}

export default TodayScore;
