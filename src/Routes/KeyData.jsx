import UserFactory from "../Factories/UserFactory";
import { useFetch } from "../utils/hooks";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

function KeyData() {
  const { id } = useParams();
  const userId = { id }.id.slice(1, { id }.id.length);
  const url = "http://localhost:5000/user/" + userId;
  const [keyData, setKeyData] = useState([]);

  const [userData, isLoaded, error] = useFetch(url, UserFactory, "user");
  useEffect(() => {
    setKeyData(JSON.stringify(userData._keyData));
  }, [userData]);

  //   console.log(userData._keyData.keys);
  //   JSON.stringify(userData._keyData).map((data) => {
  //     console.log(data);
  //   });

  //   userData.keyData.map((data) => {
  //     console.log(data);
  //   });

  console.log("hi");
  console.log(keyData);
  console.log(JSON.stringify(userData._keyData));

  return (
    <div className="key-data">
      <div>{JSON.stringify(userData._keyData)}</div>

      {/* <div className="tab">
        <div className="tab__header">
          <h1>key data</h1>
        </div>
        <div className="tab__content">
          {userData.keyData.map((data) => {
            return (
              <div className="row">
                <div className="col1">{data}</div>
                <div className="col2">{data}</div>
              </div>
            );
          })}
          <div className="row">
            <div className="col1">blabla</div>
            <div className="col2">yeah yeah</div>
          </div>
          <div className="row">
            <div className="col1">blabla</div>
            <div className="col2">yeah yeah</div>
          </div>
          <div className="row">
            <div className="col1">blabla</div>
            <div className="col2">yeah yeah</div>
          </div>
          <div className="row">
            <div className="col1">blabla</div>
            <div className="col2">yeah yeah</div>
          </div>
          <div className="row">
            <div className="col1">blabla</div>
            <div className="col2">yeah yeah</div>
          </div>
          <div className="row">
            <div className="col1">blabla</div>
            <div className="col2">yeah yeah</div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default KeyData;
