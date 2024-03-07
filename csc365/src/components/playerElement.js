import React from "react";
import styles from "./playerElement.module.css";
export default function PlayerElement(props) {
  return (
    <>
      <div className={styles.value}>{props.name}</div>
      <div className={styles.value}>{props.team}</div>
      <div className={styles.value}>{props.position}</div>
      <div className={styles.value}>{props.points}</div>
    </>
  );
}
