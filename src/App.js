import "./styles/App.css";

import { useFetch } from "./utils/customHooks";
import Loader from "./components/Loader/Loader";

// import my component
import Navbar from "./components/Navbar/Navbar";
import SideNav from "./components/SideNav/SideNav";
import Header from "./components/Header/Header";
import SectionStats from "./components/SectionStats/SectionStats";

import UserFactory from "./Factories/UserFactory";

function App() {
  const userId = 12;
  const url = "http://localhost:5000/user/" + userId;

  const [userData, isLoaded, error] = useFetch(url, UserFactory, "user");

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      <div className="App">
        <Navbar />

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

        <SideNav />
      </div>
    );
  }
}

export default App;
