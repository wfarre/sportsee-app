import UserFactory from "../Factories/UserFactory";
import { useFetch } from "../utils/hooks";
import { useParams } from "react-router";

function TodayScore() {
  const { id } = useParams();
  const userId = { id }.id.slice(1, { id }.id.length);
  const url = "http://localhost:5000/user/" + userId;

  const [userData, isLoaded, error] = useFetch(url, UserFactory, "user");

  console.log(JSON.stringify(userData));

  return (
    <div className="key-data">
      <div>{JSON.stringify(userData.todayScore)}</div>
    </div>
  );
}

export default TodayScore;
