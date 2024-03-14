import Layout from "../components/layout";
import React, { useState, useEffect } from "react";
import axios from "axios";
import LeagueForm from "../components/leagueForm";
import LeagueViewer from "../components/leagueViewer";

export default function LeagueManagement() {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    updateLeagues();
  }, []);

  // get leagues
  function updateLeagues() {
    try {
      axios.get("http://localhost:8800/league").then((response) => {
        setLeagues(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Layout>
      <h1>Add new league</h1>
      <LeagueForm updateLeagues={updateLeagues} />
      <h1>Manage league</h1>
      <LeagueViewer leagues={leagues} />
    </Layout>
  );
}
