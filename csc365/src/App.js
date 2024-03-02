import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/homepage";
import Insights from "./Pages/insights";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
    </>
  );
}

export default App;
