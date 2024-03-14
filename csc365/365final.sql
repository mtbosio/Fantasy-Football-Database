DROP DATABASE IF EXISTS FANTASY_FOOTBALL;
CREATE DATABASE FANTASY_FOOTBALL;
-- Syntax: CREATE TABLE TABLE_NAME (COL_NAME TYPE, PRIMARY KEY (COL));
USE FANTASY_FOOTBALL;

-- LEAGUE ENTITY
CREATE TABLE LEAGUE (
	LEAGUE_ID INT NOT NULL AUTO_INCREMENT,
    LEAGUE_NAME VARCHAR(50) NOT NULL,
    PRIMARY KEY (LEAGUE_ID)
);
-- NFL_TEAM ENTITY
CREATE TABLE NFL_TEAM (
	NFL_TEAM_ID VARCHAR(3) NOT NULL,
    TEAM_NAME VARCHAR(50) NOT NULL,
    PRIMARY KEY (NFL_TEAM_ID)
);
-- DEFENSE ENTITY
CREATE TABLE DEFENSE (
	NFL_TEAM_ID VARCHAR(3) NOT NULL,
    SACKS FLOAT NOT NULL,
    INTERCEPTIONS FLOAT NOT NULL,
    FUMBLE_RECOVERIES INT NOT NULL,
    TOUCHDOWNS INT NOT NULL,
    SAFETIES INT NOT NULL,
    POINTS FLOAT NOT NULL,
    PRIMARY KEY (NFL_TEAM_ID),
    FOREIGN KEY (NFL_TEAM_ID) REFERENCES NFL_TEAM(NFL_TEAM_ID)
);
-- PLAYER ENTITY
CREATE TABLE PLAYER (
	PLAYER_ID INT NOT NULL,
    PLAYER_NAME VARCHAR(100) NOT NULL,
    PLAYER_POSITION VARCHAR(5) NOT NULL,
    TEAM_ID VARCHAR(3) NOT NULL,
    PRIMARY KEY (PLAYER_ID),
    FOREIGN KEY (TEAM_ID) REFERENCES NFL_TEAM(NFL_TEAM_ID)
);
-- OFFENSIVE PLAYER IS A PLAYER
CREATE TABLE OFFENSIVE_PLAYER (
	O_PLAYER_ID INT NOT NULL REFERENCES PLAYER,
    PLAYER_NAME VARCHAR(100) NOT NULL,
    POINTS FLOAT NOT NULL,
    PPG FLOAT NOT NULL,
    GAMES_PLAYED INT NOT NULL,
    COMPLETIONS FLOAT NOT NULL,
    PASSING_YARDS FLOAT NOT NULL,
    PASSING_TD INT NOT NULL,
    INTERCEPTIONS FLOAT NOT NULL,
    PASSING_ATTEMPTS INT NOT NULL,
    RUSHING_YARDS FLOAT NOT NULL,
    RUSHING_TD INT NOT NULL,
    FUMBLES FLOAT NOT NULL,
    TARGETS INT NOT NULL,
    RECEPTIONS INT NOT NULL,
    RECEIVING_YARDS FLOAT NOT NULL,
    REC_TD INT NOT NULL,
    PRIMARY KEY(O_PLAYER_ID)
);

ALTER TABLE OFFENSIVE_PLAYER ADD CONSTRAINT FK_CHILD FOREIGN KEY(O_PLAYER_ID)
	REFERENCES PLAYER(PLAYER_ID);
-- KICKER IS A PLAYER
CREATE TABLE KICKER (
	K_PLAYER_ID INT NOT NULL REFERENCES PLAYER,
    PLAYER_NAME VARCHAR(100) NOT NULL,
    FGM INT NOT NULL, -- Field goals made
    FGA INT NOT NULL, -- Field goals attempted
    FIFTY_FGM INT NOT NULL, -- 50yd+ field goals made
    EXTRA_POINT_MADE INT NOT NULL,
    EXTRA_POINT_ATTEMPTS INT NOT NULL,
    POINTS FLOAT NOT NULL,
    PRIMARY KEY(K_PLAYER_ID)
);
ALTER TABLE KICKER ADD CONSTRAINT FK_CHILD2 FOREIGN KEY(K_PLAYER_ID)
	REFERENCES PLAYER(PLAYER_ID);
 
 -- FANTASY MANAGER ENTITY
CREATE TABLE FANTASY_MANAGER (
	MANAGER_ID INT NOT NULL AUTO_INCREMENT,
    TEAM_NAME VARCHAR(50) NOT NULL,
    LEAGUE_ID INT NOT NULL,
    QB INT NOT NULL,
    RB1 INT NOT NULL,
    RB2 INT NOT NULL,
    WR1 INT NOT NULL,
    WR2 INT NOT NULL,
    TE INT NOT NULL,
    FLX INT NOT NULL,
    DEF VARCHAR(3) NOT NULL,
    KICK INT NOT NULL,
    PRIMARY KEY (MANAGER_ID),
    FOREIGN KEY (LEAGUE_ID) REFERENCES LEAGUE(LEAGUE_ID),
    FOREIGN KEY (QB) REFERENCES PLAYER(PLAYER_ID),
    FOREIGN KEY (RB1) REFERENCES PLAYER(PLAYER_ID),
    FOREIGN KEY (RB2) REFERENCES PLAYER(PLAYER_ID),
    FOREIGN KEY (WR1) REFERENCES PLAYER(PLAYER_ID),
    FOREIGN KEY (WR2) REFERENCES PLAYER(PLAYER_ID),
    FOREIGN KEY (TE) REFERENCES PLAYER(PLAYER_ID),
    FOREIGN KEY (FLX) REFERENCES PLAYER(PLAYER_ID),
    FOREIGN KEY (DEF) REFERENCES DEFENSE(NFL_TEAM_ID),
    FOREIGN KEY (KICK) REFERENCES PLAYER(PLAYER_ID)
);

-- FOREIGN KEY (col) REFERENCES Table(col)