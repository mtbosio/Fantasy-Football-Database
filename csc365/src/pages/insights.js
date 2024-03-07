import Layout from "../components/layout";
import React, { useState } from "react";
import PlayerElement from "../components/playerElement";
export default function Insights() {
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");

  const retreiveInfo = (type, info) => {
    if (type === "team") {
      setSelectedTeam(info);
      //query database
    } else if (type === "position") {
      setSelectedPosition(info);
    }
    console.log(info);
    // retreive info from database
  };

  const teams = [
    { value: "1", label: "Arizona Cardinals" },
    { value: "2", label: "Atlanta Falcons" },
    { value: "3", label: "Baltimore Ravens" },
    { value: "4", label: "Buffalo Bills" },
    { value: "5", label: "Carolina Panthers" },
    { value: "6", label: "Chicago Bears" },
    { value: "7", label: "Cincinnati Bengals" },
    { value: "8", label: "Cleveland Browns" },
    { value: "9", label: "Dallas Cowboys" },
    { value: "10", label: "Denver Broncos" },
    { value: "11", label: "Detroit Lions" },
    { value: "12", label: "Green Bay Packers" },
    { value: "13", label: "Houston Texans" },
    { value: "14", label: "Indianapolis Colts" },
    { value: "15", label: "Jacksonville Jaguars" },
    { value: "16", label: "Kansas City Chiefs" },
    { value: "17", label: "Las Vegas Raiders" },
    { value: "18", label: "Los Angeles Chargers" },
    { value: "19", label: "Los Angeles Rams" },
    { value: "20", label: "Miami Dolphins" },
    { value: "21", label: "Minnesota Vikings" },
    { value: "22", label: "New England Patriots" },
    { value: "23", label: "New Orleans Saints" },
    { value: "24", label: "New York Giants" },
    { value: "25", label: "New York Jets" },
    { value: "26", label: "Philadelphia Eagles" },
    { value: "27", label: "Pittsburgh Steelers" },
    { value: "28", label: "San Francisco 49ers" },
    { value: "29", label: "Seattle Seahawks" },
    { value: "30", label: "Tampa Bay Buccaneers" },
    { value: "31", label: "Tennessee Titans" },
    { value: "32", label: "Washington Football Team" },
  ];
  const positions = [
    { value: "1", label: "QB" },
    { value: "2", label: "RB" },
    { value: "3", label: "WR" },
    { value: "4", label: "TE" },
    { value: "5", label: "DEF" },
    { value: "6", label: "KICK" },
  ];
  const examplePlayers = [
    {
      name: "Josh Allen",
      team: "BUF",
      pos: "QB",
      pts: "450.6",
      //pts_per_game: "26.5",
      //gp: "17",
      //cmp: "385",
    },
    {
      name: "Bob Allen",
      team: "BUF",
      pos: "QB",
      pts: "450.6",
      //pts_per_game: "26.5",
      //gp: "17",
      //cmp: "385",
    },
    {
      name: "Bill Allen",
      team: "BUF",
      pos: "QB",
      pts: "450.6",
      //pts_per_game: "26.5",
      //gp: "17",
      //cmp: "385",
    },
    {
      name: "Jim Allen",
      team: "BUF",
      pos: "QB",
      pts: "450.6",
      //pts_per_game: "26.5",
      //gp: "17",
      //cmp: "385",
    },
    {
      name: "John Allen",
      team: "BUF",
      pos: "QB",
      pts: "450.6",
      //pts_per_game: "26.5",
      //gp: "17",
      //cmp: "385",
    },
  ];
  return (
    <Layout>
      <h1>Fantasy Football Insights</h1>
      <div className="">
        Top 5 Players By Team
        <select
          value={selectedTeam}
          onChange={(e) => retreiveInfo("team", e.target.value)}
        >
          {teams.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div style={styles.statsContainer}>
          <div style={styles.innerContainer}>Name</div>
          <div style={styles.innerContainer}>Team</div>
          <div style={styles.innerContainer}>Position</div>
          <div style={styles.innerContainer}>Points</div>

          {examplePlayers.map((player) => (
            <PlayerElement
              key={player.name}
              name={player.name}
              team={player.team}
              position={player.pos}
              points={player.pts}
            />
          ))}
        </div>
      </div>
      <br />
      <div className="">
        Top 5 Players By Position
        <select
          value={selectedPosition}
          onChange={(e) => retreiveInfo("position", e.target.value)}
        >
          {positions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div style={styles.statsContainer}>
          <div style={styles.innerContainer}>Name</div>
          <div style={styles.innerContainer}>Team</div>
          <div style={styles.innerContainer}>Position</div>
          <div style={styles.innerContainer}>Points</div>

          {examplePlayers.map((player) => (
            <PlayerElement
              key={player.name}
              name={player.name}
              team={player.team}
              position={player.pos}
              points={player.pts}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

const styles = {
  statsContainer: {
    display: "grid",
    grid: "1fr 1fr 1fr 1fr 1fr 1fr / 1fr 1fr 1fr 1fr ",
    border: "1px solid black",
    placeItems: "center",
  },
  innerContainer: {
    border: "1px solid black",
    width: "100%",
    height: "100%",
    textAlign: "center",
  },
};
