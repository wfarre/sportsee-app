import UserFactory from "../Factories/UserFactory";
import { useFetch } from "../utils/hooks";
import { useParams } from "react-router";

function KeyData() {
  const { id } = useParams();
  const userId = { id }.id.slice(1, { id }.id.length);
  const url = "http://localhost:5000/user/" + userId;

  const [userData, isLoaded, error] = useFetch(url, UserFactory, "user");

  return (
    <div className="data data--key">
      <div>{JSON.stringify(userData._keyData)}</div>
    </div>
  );
}

export default KeyData;
