import UserFactory from "../Factories/UserFactory";
import { useFetch } from "../utils/customHooks";
import { useParams } from "react-router";

function KeyData() {
  const { id } = useParams();
  const userId = { id }.id;
  const url = "http://localhost:5000/user/" + userId;

  const [userData, isLoaded, error] = useFetch(url, UserFactory, "user");

  return JSON.stringify(userData._keyData);
}

export default KeyData;
