import styles from "./styles.module.scss";
import { Chart } from "../diagram/Chart";
import { createRef } from "react";
import { useEffect } from "react";
import React from "react";

interface Props {
  status: string;
  date: string;
  name: string;
  description: string;
  acceptence: any;
  mode: any;
}

export const Task = (props: Props) => {
  const {} = props;

  const checkstate = () => {
    if (props.status === "green") {
      if (props.mode === true) {
        return styles.container1White;
      } else {
        return styles.container1;
      }
    }
    if (props.status !== "green") {
      if (props.mode === true) {
        return styles.container2White;
      } else {
        return styles.container2;
      }
    }
  };

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
      </style>
      <div className={props.status === "green" ? checkstate() : checkstate()}>
        <h2 className={!props.mode ? styles.header : styles.headerWhite}>
          {props.name} {props.date}
        </h2>
        <div className={styles.description}>
          <p
            className={
              !props.mode
                ? styles.description_text
                : styles.description_textWhite
            }
          >
            {props.description}
          </p>
        </div>
        {props.acceptence !== null ? (
          <div
            className={!props.mode ? styles.acceptence : styles.acceptenceWhite}
          >
            <div className={styles.acceptence_text}>
              <span>Готово </span>
              <pre> </pre>
              {props.acceptence}%
            </div>
            <Chart></Chart>
          </div>
        ) : (
          <></>
        )}
        <footer className={styles.task_footer}>
          <p className={!props.mode ? styles.p : styles.pWhite}>Обзор</p>
          <p className={!props.mode ? styles.p : styles.pWhite}>Закрыть</p>
        </footer>
      </div>
    </>
  );
};
