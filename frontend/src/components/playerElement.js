import React from "react";
import styles from "./playerElement.module.css";
export default function PlayerElement(props) {
  console.log(props.position);
  if (props.position === "K") {
    return (
      <>
        <div className={styles.value}>{props.name}</div>
        <div className={styles.value}>{props.team}</div>
        <div className={styles.value}>{props.position}</div>
        <div className={styles.value}>{props.points}</div>
        <div className={styles.value}>{props.fgm}</div>
        <div className={styles.value}>{props.fga}</div>
        <div className={styles.value}>{props.fifty_fgm}</div>
        <div className={styles.value}>{props.epa}</div>
        <div className={styles.value}>{props.epm}</div>
      </>
    );
  } else {
    return (
      <>
        <div className={styles.value}>{props.name}</div>
        <div className={styles.value}>{props.team}</div>
        <div className={styles.value}>{props.position}</div>
        <div className={styles.value}>{props.points}</div>
        <div className={styles.value}>{props.PPG}</div>
        <div className={styles.value}>{props.GP}</div>
        <div className={styles.value}>{props.comp}</div>
        <div className={styles.value}>{props.pass_yrds}</div>
        <div className={styles.value}>{props.pass_td}</div>
        <div className={styles.value}>{props.int}</div>
        <div className={styles.value}>{props.pass_atmpt}</div>
        <div className={styles.value}>{props.rush_yrds}</div>
        <div className={styles.value}>{props.rush_td}</div>
        <div className={styles.value}>{props.fumbles}</div>
        <div className={styles.value}>{props.targets}</div>
        <div className={styles.value}>{props.receptions}</div>
        <div className={styles.value}>{props.rec_yrds}</div>
        <div className={styles.value}>{props.rec_td}</div>
      </>
    );
  }
}
