import Layout from "../components/layout";
import React, { useState } from "react";

export default function Insights() {
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");

  const retreiveInfo = (type, info) => {
    if (type === "team") {
      setSelectedTeam(info);
    } else if (type === "position") {
      setSelectedPosition(info);
    }

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
  return (
    <Layout>
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
      </div>
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
      </div>
    </Layout>
  );
}
