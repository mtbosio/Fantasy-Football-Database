import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/homepage";
import Insights from "./Pages/insights";
import LeagueManagement from "./Pages/leagueManagement";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/league" element={<LeagueManagement />}/>
      </Routes>
    </>
  );
}

export default App;
