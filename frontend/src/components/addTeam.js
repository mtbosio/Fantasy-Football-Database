import axios from "axios";

export default function AddTeam(props) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const teamName = event.currentTarget.elements.name.value;

    try {
      axios
        .post("http://localhost:8800/manager", {
          TEAM_NAME: teamName,
          LEAGUE_ID: Number(props.currentLeague),
        })
        .then((response) => {
          alert("Team Succesfully Created!");
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Manager Team Name" />
          <button type="submit">Create Manager</button>
        </form>
      </div>
    </>
  );
}
