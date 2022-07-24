import "./styles/App.css";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import SectionStats from "./components/SectionStats";
import { useEffect, useId, useState } from "react";
import { useParams } from "react-router";

import UserFactory from "./Factories/UserFactory";
import { useFetch } from "./utils/hooks";

function App() {
  const { id } = useParams();
  const userId = { id }.id.slice(1, { id }.id.length);
  const url = "http://localhost:5000/user/" + userId;

  const [userData, isLoaded, error] = useFetch(url, UserFactory, "user");

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <Navbar></Navbar>

        <main className="main">
          <Header userName={userData.userInfos.firstName} />
          <SectionStats
            url={url}
            calory={userData.keyData.calorieCount}
            protein={userData.keyData.proteinCount}
            lipid={userData.keyData.lipidCount}
            carb={userData.keyData.carbohydrateCount}
            score={userData.todayScore ? userData.todayScore : userData.score}
          />
        </main>

        <SideNav></SideNav>
      </div>
    );
  }
}

export default App;
