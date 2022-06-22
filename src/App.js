import './styles/App.css';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import Header from './components/Header';
import SectionStats from './components/SectionStats';
import { useEffect, useId, useState } from 'react';
import { useParams } from 'react-router';

import UserFactory from './Factories/UserFactory';









function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userData, setUserData] = useState([]);
  const [sessionData, setSessionData] = useState([]);
  const [performanceData, setPerformanceData] = useState([]);


  const {id} = useParams();
  const userId = {id}.id.slice(1,{id}.id.length)
  const url = 'http://localhost:5000/user/'+ userId;

  // setUrl('http://localhost:5000/user/'+ userId)


  useEffect(() => {
    fetch(url).then(res => {
      return res.json();
    }).then( result => {
      setIsLoaded(true);
      // console.log(result.data);
      const data = new UserFactory(result.data, 'user');
      // console.log(data);
      // setUserData(result.data)
      setUserData(data);
    }, 
    err => {
      setIsLoaded(true);
      setError(err);
      console.log(error);
    })
  }, [])

  // console.log(userData.userInfos.firstName);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
  return (
    <div className="App">
      <Navbar></Navbar>
      
      <main className='main'>
        <Header 
          userName = {userData.userInfos.firstName}
        />
        <SectionStats 
          url={url}
          calory = {userData.keyData.calorieCount}
          protein = {userData.keyData.proteinCount}
          lipid = {userData.keyData.lipidCount}
          carb = {userData.keyData.carbohydrateCount}
        />
      </main>

      <SideNav></SideNav>
     
    </div>
  );}
}

export default App;
