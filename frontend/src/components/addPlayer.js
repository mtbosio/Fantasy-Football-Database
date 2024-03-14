import axios from "axios";
import { useState, useEffect } from "react";
export default function AddPlayer(props) {
  const positionsOptions = [
    { value: "1", label: "QB" },
    { value: "2", label: "RB1" },
    { value: "3", label: "RB2" },
    { value: "4", label: "WR1" },
    { value: "5", label: "WR2" },
    { value: "6", label: "TE" },
    { value: "7", label: "FLX" },
    { value: "8", label: "DEF" },
  ];
  const [positionOption, setPositionOption] = useState(0);
  const [managers, setManagers] = useState([]);
  const [curLeague, setCurLeague] = useState(null);
  const [currentTeam, setCurrentTeam] = useState();
  const [name, setName] = useState("");

  useEffect(() => {
    // get managers for current league
    setCurLeague(props.currentLeague);
    setCurrentTeam(0);
    if (curLeague) {
      getManagers(props.currentLeague);
    }
  }, [curLeague, props.currentLeague]);

  function getManagers(leagueId) {
    try {
      axios.get(`http://localhost:8800/league/${leagueId}`).then((response) => {
        setManagers(response.data);
      });
    } catch (err) {}
  }
  function handleSubmit(event) {
    setCurrentTeam(event.target.value);
  }
  const handleSearch = (event) => {
    event.preventDefault();

    try {
      axios
        .get(`http://localhost:8800/player/name/${name}`)
        .then((response) => {
          addPlayer(response.data);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const addPlayer = (player) => {
    console.log(currentTeam);
    try {
      axios
        .post("http://localhost:8800/player", {
          SELECTED_POSITION: positionOption,
          PLAYER_ID: player[0].O_PLAYER_ID,
          MANAGER_ID: currentTeam,
        })
        .then((response) => {
          alert("Player Succesfully Added");
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div>
        <select onChange={handleSubmit}>
          {managers.map((team) => (
            <option value={team.MANAGER_ID} key={team.MANAGER_ID}>
              {team.TEAM_NAME}
            </option>
          ))}
        </select>
        <select
          value={positionOption}
          onChange={(e) => setPositionOption(e.target.value)}
        >
          {positionsOptions.map((option) => (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="name"
            placeholder="Player First and Last Name"
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Add Player</button>
        </form>
      </div>
    </>
  );
}
