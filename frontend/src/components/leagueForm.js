import axios from "axios";

function LeagueForm(props) {
 
    function handleSubmit(event) {
        event.preventDefault();
        const leagueName = event.currentTarget.elements.name.value;

        try {
            axios.post("http://localhost:8800/league", {
                LEAGUE_NAME: leagueName
            }).then((response) => {
                props.updateLeagues();
                alert("League successfully created!");
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="League Name" />
                <button type="submit">Create League</button>
            </form>
        </div>
    );
}

export default LeagueForm;