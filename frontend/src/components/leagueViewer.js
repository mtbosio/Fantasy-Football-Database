import axios from "axios";
import React, { useState, useEffect } from "react";

function LeagueViewer(props) {

    const [managers, setManagers] = useState([]);
    const [currLeagueId, setCurrLeagueId] = useState(null);

    useEffect(() => {
        // get managers for current league
        if (props.leagues.length > 0 && !currLeagueId) {
            setCurrLeagueId(props.leagues[0].LEAGUE_ID);
        }

        if (currLeagueId) {
            getManagers(currLeagueId);
        }
    }, [currLeagueId, props.leagues]);

    function handleSubmit(event) {
        event.preventDefault();
        setCurrLeagueId(event.target.value);
    }

    function getManagers(leagueId) {
        try {
            axios.get(`http://localhost:8800/league/${leagueId}`)
            .then((response) => {
                setManagers(response.data);
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <select onChange={handleSubmit}>
                {props.leagues.map((league) => 
                    (<option value={league.LEAGUE_ID} key={league.LEAGUE_ID}>{league.LEAGUE_NAME}</option>)
                )}
            </select>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Manager Team Name</th>
                        <th>QB</th>
                        <th>RB1</th>
                        <th>RB2</th>
                        <th>WR 1</th>
                        <th>WR 2</th>   
                        <th>TE</th>
                        <th>FLX</th>
                        <th>DEF</th>
                        <th>KICK</th>
                    </tr>
                </thead>
                <tbody>
                    {managers.map((manager, index) => {
                        return (
                            <tr key={index}>
                                <td>{manager.TEAM_NAME}</td>
                                <td>{manager.QB}</td>
                                <td>{manager.RB1}</td>
                                <td>{manager.RB2}</td>
                                <td>{manager.WR1}</td>
                                <td>{manager.WR2}</td>
                                <td>{manager.TE}</td>
                                <td>{manager.FLX}</td>
                                <td>{manager.DEF}</td>
                                <td>{manager.KICK}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default LeagueViewer;