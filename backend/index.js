import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Super089",
  database: "FANTASY_FOOTBALL",
});

app.use(express.json());
app.use(cors());

// example get
app.get("/", (req, res) => {
  res.json("hello from backend");
});

// get player by team
app.get("/player/team/:id", (req, res) => {
  const id = req.params["id"];
  const q =
    "SELECT PLAYER.TEAM_ID, PLAYER.PLAYER_POSITION, OFFENSIVE_PLAYER.* FROM OFFENSIVE_PLAYER JOIN PlAYER ON OFFENSIVE_PLAYER.O_PLAYER_ID = PLAYER.PLAYER_ID WHERE TEAM_ID = ? ORDER BY OFFENSIVE_PLAYER.POINTS DESC LIMIT 5";
  db.query(q, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// get individual player
app.get("/player/name/:id", (req, res) => {
  const id = req.params["id"];
  const q =
    "SELECT PLAYER.TEAM_ID, PLAYER.PLAYER_POSITION, OFFENSIVE_PLAYER.* FROM OFFENSIVE_PLAYER JOIN PlAYER ON OFFENSIVE_PLAYER.O_PLAYER_ID = PLAYER.PLAYER_ID WHERE PLAYER.PLAYER_NAME = ?;";
  db.query(q, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// get player by position
app.get("/player/position/:id", (req, res) => {
  const id = req.params["id"];
  var q;
  if (id === "KICK") {
    q =
      "SELECT PLAYER.TEAM_ID, PLAYER.PLAYER_POSITION, KICKER.* FROM KICKER JOIN PlAYER ON KICKER.K_PLAYER_ID = PLAYER.PLAYER_ID WHERE PLAYER.PLAYER_POSITION = 'K' ORDER BY KICKER.POINTS DESC LIMIT 5";
  } else {
    q =
      "SELECT PLAYER.TEAM_ID, PLAYER.PLAYER_POSITION, OFFENSIVE_PLAYER.* FROM OFFENSIVE_PLAYER JOIN PlAYER ON OFFENSIVE_PLAYER.O_PLAYER_ID = PLAYER.PLAYER_ID WHERE PLAYER.PLAYER_POSITION = ? ORDER BY OFFENSIVE_PLAYER.POINTS DESC LIMIT 5";
  }
  db.query(q, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// get defense
app.get("/defense", (req, res) => {
  const q =
    "SELECT NFL_TEAM.NFL_TEAM_ID, DEFENSE.* FROM DEFENSE JOIN NFL_TEAM ON NFL_TEAM.NFL_TEAM_ID = DEFENSE.NFL_TEAM_ID ORDER BY POINTS DESC LIMIT 5";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// post example
app.post("/manager", (req, res) => {
  const q =
    "INSERT INTO FANTASY_MANAGER ('MANAGER_ID', 'TEAM_NAME', 'LEAGUE_ID', 'QB', 'RB1', 'RB2', 'WR1', 'WR2', 'TE', 'FLX', 'DEF', 'KICK',) VALUES (?)";
  const values = [
    req.body.MANAGER_ID,
    req.body.TEAM_NAME,
    req.body.LEAGUE_ID,
    req.body.QB,
    req.body.RB1,
    req.body.RB2,
    req.body.WR1,
    req.body.WR2,
    req.body.TE,
    req.body.FLX,
    req.body.DEF,
    req.body.KICK,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Manager succesfully inserted");
  });
});

app.listen(8800, () => {
  console.log("Connected to backend");
});
