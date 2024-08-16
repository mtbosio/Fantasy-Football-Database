Fantasy football is a game where participants, called fantasy managers, compete within a league where they can draft players to their own virtual team. Then, each team is scored over the course of a season based on the performance of the actual NFL players. Our goal with this project is to create a database to store data that helps both store relevant player statistics, for making decisions about teams, and the actual logistics for the Fantasy Football competition (such as the fantasy teams, managers, and leagues).

Business Rules:
A Fantasy Manager has multiple Players (1 : M)
A Fantasy Manager has one Team Defense (1 : 1)
A Fantasy Manager has one Kicker (1 : 1)
One Player can only play for one Fantasy Manager (1 : 1)
One Player can only play for one NFL team (1 : 1)
An NFL team has multiple Players. (1 : M)
An NFL team has multiple Kickers (1 : M)
One Defense can only play for one NFL team (1 : 1)
A Player is an Offensive player or a Kicker (Supertype)
A League has Multiple Fantasy Managers (1 : M)
A Fantasy Manager can be part of only one League (1 : 1)

Entity Definitions: 
There are 5 main entities, as well as two subtype entities. The main entities are League, Fantasy_Manager, NFL_Team, Defense, and Player. A Player is either of the subtypes Offensive_Player_Stats or Kicker_Player_Stats. 

A League represents the Fantasy Football league the Fantasy_Manager competes in. The Fantasy_Manager has many Players, and depending on the Player position, they are either an Offensive_Player_Stats or a Kicker_Player_Stats. Each Player has an NFL_Team they play for. Because of how Fantasy Football stats work, each Fantasy_Manager also has one Defense that is associated with an NFL_Team.

Normalization:
The relational database design above has been normalized to minimize redundancy. For instance, to ensure that the offensive player entity did not have unnecessary kicker stats or vice versa, inheritance was implemented with the Player supertype and Offensive_Player_Stats and Kicker_Player_Stats subtypes.

Reflection and Future Work:
Project: Our project helps fantasy users make informed decisions for drafting the team that they believe will score them the highest points.

Impact: Our insights page allows users to gain relevant statistics regarding Fantasy football. Being able to both get statistics and manage the fantasy competition on one website makes the barrier to entry lower for newer participants while making the experience more seamless for experienced users.

Teamwork: Our teamwork allowed our project to progress smoothly. Meeting up during lab to discuss what we were working on helped to keep us on track. We were also able to split up the work evenly.

Future Work: 
Improve Styling of the Frontend: as of now, we focused on functionality instead of the design. A future implementation could follow a Figma design in order to improve the look and feel of the app.
Hosting: we are currently hosting both the database and the frontend locally, but in the future, using a Cloud Hosting service would allow our app to be used by others.
New Queries: it would be beneficial to users to have more insights on player performance to help draft their Fantasy Teams.
Historical Stats: a future implementation might allow users to compare player stats with past years to see trends in how a player’s performance is improving or deteriorating. In addition, a user could see how a player performed against a certain team in the past to prepare for an upcoming game.

