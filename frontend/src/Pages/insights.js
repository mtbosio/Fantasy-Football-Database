import Layout from "../components/layout";
import React, { useEffect, useState } from "react";
import PlayerElement from "../components/playerElement";
import Container from "../components/container";
import axios from "axios";

export default function Insights() {
  const [teamOption, setTeamOption] = useState("");
  const [positionOption, setPositionOption] = useState("");

  const [teamPlayers, setTeamPlayers] = useState([]);
  const [positionPlayers, setPositionPlayers] = useState([]);
  const [searchPlayer, setSearchPlayer] = useState([]);
  const [defenses, setDefenses] = useState([]);

  const teamOptions = [
    { value: "1", label: "ARI" }, // Arizona Cardinals
    { value: "2", label: "ATL" }, // Atlanta Falcons
    { value: "3", label: "BAL" }, // Baltimore Ravens
    { value: "4", label: "BUF" }, // Buffalo Bills
    { value: "5", label: "CAR" }, // Carolina Panthers
    { value: "6", label: "CHI" }, // Chicago Bears
    { value: "7", label: "CIN" }, // Cincinnati Bengals
    { value: "8", label: "CLE" }, // Cleveland Browns
    { value: "9", label: "DAL" }, // Dallas Cowboys
    { value: "10", label: "DEN" }, // Denver Broncos
    { value: "11", label: "DET" }, // Detroit Lions
    { value: "12", label: "GB" }, // Green Bay Packers
    { value: "13", label: "HOU" }, // Houston Texans
    { value: "14", label: "IND" }, // Indianapolis Colts
    { value: "15", label: "JAX" }, // Jacksonville Jaguars
    { value: "16", label: "KC" }, // Kansas City Chiefs
    { value: "17", label: "LV" }, // Las Vegas Raiders
    { value: "18", label: "LAC" }, // Los Angeles Chargers
    { value: "19", label: "LAR" }, // Los Angeles Rams
    { value: "20", label: "MIA" }, // Miami Dolphins
    { value: "21", label: "MIN" }, // Minnesota Vikings
    { value: "22", label: "NE" }, // New England Patriots
    { value: "23", label: "NO" }, // New Orleans Saints
    { value: "24", label: "NYG" }, // New York Giants
    { value: "25", label: "NYJ" }, // New York Jets
    { value: "26", label: "PHI" }, // Philadelphia Eagles
    { value: "27", label: "PIT" }, // Pittsburgh Steelers
    { value: "28", label: "SF" }, // San Francisco 49ers
    { value: "29", label: "SEA" }, // Seattle Seahawks
    { value: "30", label: "TB" }, // Tampa Bay Buccaneers
    { value: "31", label: "TEN" }, // Tennessee Titans
    { value: "32", label: "WAS" }, // Washington Football Team
  ];

  const positionsOptions = [
    { value: "1", label: "QB" },
    { value: "2", label: "RB" },
    { value: "3", label: "WR" },
    { value: "4", label: "TE" },
    { value: "5", label: "KICK" },
  ];

  useEffect(() => {
    const fetchInitialPlayersByTeam = async () => {
      try {
        setTeamOption();
        setPositionOption();
        setTeamPlayers(
          (await axios.get("http://localhost:8800/player/team/ARI")).data
        );
        setPositionPlayers(
          (await axios.get("http://localhost:8800/player/position/QB")).data
        );
        setDefenses((await axios.get("http://localhost:8800/defense")).data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchInitialPlayersByTeam();
  }, []);

  const retreiveInfo = async (type, info) => {
    if (type === "team") {
      setTeamOption(info);
      try {
        const res = await axios.get(
          `http://localhost:8800/player/team/${info}`
        );
        setTeamPlayers(res.data);
      } catch (err) {
        console.log(err);
      }
    } else if (type === "position") {
      setPositionOption(info);
      try {
        const res = await axios.get(
          `http://localhost:8800/player/position/${info}`
        );
        setPositionPlayers(res.data);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      setSearchPlayer(
        (
          await axios.get(
            `http://localhost:8800/player/name/${event.target.value}`
          )
        ).data
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Layout>
      <h1>Fantasy Football Insights</h1>
      <div className="topByTeam">
        Top 5 Players By Team
        <select
          value={teamOption}
          onChange={(e) => retreiveInfo("team", e.target.value)}
        >
          {teamOptions.map((option) => (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
        <Container
          position=""
          children={teamPlayers.map((player) => (
            <PlayerElement
              key={player.PLAYER_ID}
              name={player.PLAYER_NAME}
              team={player.TEAM_ID}
              position={player.PLAYER_POSITION}
              points={player.POINTS}
              PPG={player.PPG}
              GP={player.GAMES_PLAYED}
              comp={player.COMPLETIONS}
              pass_yrds={player.PASSING_YARDS}
              pass_td={player.PASSING_TD}
              int={player.INTERCEPTIONS}
              pass_atmpt={player.PASSING_ATTEMPTS}
              rush_yrds={player.RUSHING_YARDS}
              rush_td={player.RUSHING_TD}
              fumbles={player.FUMBLES}
              targets={player.TARGETS}
              receptions={player.RECEPTIONS}
              rec_yrds={player.RECEIVING_YARDS}
              rec_td={player.REC_TD}
            />
          ))}
        ></Container>
      </div>
      <br />
      <div className="topByPosition">
        Top 5 Players By Position
        <select
          value={positionOption}
          onChange={(e) => retreiveInfo("position", e.target.value)}
        >
          {positionsOptions.map((option) => (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
        <Container
          position={positionOption}
          children={positionPlayers.map((player) => (
            <PlayerElement
              key={player.PLAYER_ID}
              name={player.PLAYER_NAME}
              team={player.TEAM_ID}
              position={player.PLAYER_POSITION}
              points={player.POINTS}
              PPG={player.PPG}
              GP={player.GAMES_PLAYED}
              comp={player.COMPLETIONS}
              pass_yrds={player.PASSING_YARDS}
              pass_td={player.PASSING_TD}
              int={player.INTERCEPTIONS}
              pass_atmpt={player.PASSING_ATTEMPTS}
              rush_yrds={player.RUSHING_YARDS}
              rush_td={player.RUSHING_TD}
              fumbles={player.FUMBLES}
              targets={player.TARGETS}
              receptions={player.RECEPTIONS}
              rec_yrds={player.RECEIVING_YARDS}
              rec_td={player.REC_TD}
              fgm={player.FGM}
              fga={player.FGA}
              fifty_fgm={player.FIFTY_FGM}
              epm={player.EXTRA_POINT_MADE}
              epa={player.EXTRA_POINT_ATTEMPTS}
            />
          ))}
        ></Container>
      </div>
      <br />
      <div className="searchPlayer">
        <div>
          Search For Player
          <input
            type="text"
            placeholder="First and Last Name"
            onChange={handleSearch}
            name="fullName"
          />
          <Container
            position=""
            children={searchPlayer.map((player) => (
              <PlayerElement
                key={player.PLAYER_ID}
                name={player.PLAYER_NAME}
                team={player.TEAM_ID}
                position={player.PLAYER_POSITION}
                points={player.POINTS}
                PPG={player.PPG}
                GP={player.GAMES_PLAYED}
                comp={player.COMPLETIONS}
                pass_yrds={player.PASSING_YARDS}
                pass_td={player.PASSING_TD}
                int={player.INTERCEPTIONS}
                pass_atmpt={player.PASSING_ATTEMPTS}
                rush_yrds={player.RUSHING_YARDS}
                rush_td={player.RUSHING_TD}
                fumbles={player.FUMBLES}
                targets={player.TARGETS}
                receptions={player.RECEPTIONS}
                rec_yrds={player.RECEIVING_YARDS}
                rec_td={player.REC_TD}
                fgm={player.FGM}
                fga={player.FGA}
                fifty_fgm={player.FIFTY_FGM}
                epm={player.EXTRA_POINT_MADE}
                epa={player.EXTRA_POINT_ATTEMPTS}
              />
            ))}
          ></Container>
        </div>
      </div>
      <br />
      <div className="topDefenses">
        Top 5 Defenses
        <Container
          position="DEF"
          children={defenses.map((defense) => (
            <>
              <div style={styles.value}>{defense.NFL_TEAM_ID}</div>
              <div style={styles.value}>{defense.POINTS}</div>
              <div style={styles.value}>{defense.SACKS}</div>
              <div style={styles.value}>{defense.INTERCEPTIONS}</div>
              <div style={styles.value}>{defense.FUMBLE_RECOVERIES}</div>
              <div style={styles.value}>{defense.TOUCHDOWNS}</div>
              <div style={styles.value}>{defense.SAFETIES}</div>
            </>
          ))}
        ></Container>
      </div>
    </Layout>
  );
}

const styles = {
  value: {
    border: "1px solid black",
    width: "100%",
    height: "100%",
    textAlign: "center",
  },
};
