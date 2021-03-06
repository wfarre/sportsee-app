import "./styles/App.css";

import { useParams } from "react-router";
import { useFetch } from "./utils/hooks";

// import my component
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import SectionStats from "./components/SectionStats";

import UserFactory from "./Factories/UserFactory";

import formateNumber from "./utils/formateDate";

function App() {
  const { id } = useParams();
  const userId = { id }.id;
  const url = "http://localhost:5000/user/" + userId;

  const [userData, isLoaded, error] = useFetch(url, UserFactory, "user");

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <Navbar />

        <main className="main">
          <Header userName={userData.userInfos.firstName} />

          <SectionStats
            url={url}
            calory={formateNumber(userData.keyData.calorieCount)}
            protein={userData.keyData.proteinCount}
            lipid={userData.keyData.lipidCount}
            carb={userData.keyData.carbohydrateCount}
            score={userData.todayScore ? userData.todayScore : userData.score}
          />
        </main>

        <SideNav />
      </div>
    );
  }
}

export default App;
