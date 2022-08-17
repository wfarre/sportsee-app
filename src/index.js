import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Activity from "./Routes/Activity";
import AverageSessions from "./Routes/AverageSessions";
import Activities from "./Routes/Activities";
import TodayScore from "./Routes/TodayScore";
import KeyData from "./Routes/KeyData";
import UserInfos from "./Routes/UserInfos";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/user/dashboard" element={<App />} />
      <Route path="/user/:id" element={<UserInfos />} />
      <Route path="/user/:id/activity" element={<Activity />} />
      <Route path="/user/:id/average-sessions" element={<AverageSessions />} />
      <Route path="/user/:id/today-score" element={<TodayScore />} />
      <Route path="/user/:id/activities" element={<Activities />} />
      <Route path="/user/:id/key-data" element={<KeyData />} />
    </Routes>
  </BrowserRouter>
);
