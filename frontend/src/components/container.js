import React from "react";
import styles from "./container.module.css";
export default function Container({ position, children }) {
  if (position === "KICK") {
    return (
      <div className={styles.kickerStatsContainer}>
        <div className={styles.innerContainer}>Name</div>
        <div className={styles.innerContainer}>Team</div>
        <div className={styles.innerContainer}>Position</div>
        <div className={styles.innerContainer}>Points</div>
        <div className={styles.innerContainer}>Field Goals Made</div>
        <div className={styles.innerContainer}>Field Goals Attempted</div>
        <div className={styles.innerContainer}>50 Yard FG Made</div>
        <div className={styles.innerContainer}>Extra Points Attemtped</div>
        <div className={styles.innerContainer}>Extra Points Made</div>
        {children}
      </div>
    );
  } else if (position === "DEF") {
    return (
      <div className={styles.defenseStatsContainer}>
        <div className={styles.innerContainer}>Name</div>
        <div className={styles.innerContainer}>Points</div>
        <div className={styles.innerContainer}>Sacks</div>
        <div className={styles.innerContainer}>Interceptions</div>
        <div className={styles.innerContainer}>Fumble Recoveries</div>
        <div className={styles.innerContainer}>Touchdowns</div>
        <div className={styles.innerContainer}>Safeties</div>
        {children}
      </div>
    );
  } else {
    return (
      <div className={styles.offensiveStatsContainer}>
        <div className={styles.innerContainer}>Name</div>
        <div className={styles.innerContainer}>Team</div>
        <div className={styles.innerContainer}>Position</div>
        <div className={styles.innerContainer}>Points</div>
        <div className={styles.innerContainer}>Points Per Game</div>
        <div className={styles.innerContainer}>Games Played</div>
        <div className={styles.innerContainer}>Completions</div>
        <div className={styles.innerContainer}>Passing Yards</div>
        <div className={styles.innerContainer}>Passing TD</div>
        <div className={styles.innerContainer}>Interceptions</div>
        <div className={styles.innerContainer}>Passing Attempts</div>
        <div className={styles.innerContainer}>Rushing Yards</div>
        <div className={styles.innerContainer}>Rushing TD</div>
        <div className={styles.innerContainer}>Fumbles</div>
        <div className={styles.innerContainer}>Targets</div>
        <div className={styles.innerContainer}>Receptions</div>
        <div className={styles.innerContainer}>Receiving Yards</div>
        <div className={styles.innerContainer}>Receiving TD</div>
        {children}
      </div>
    );
  }
}
