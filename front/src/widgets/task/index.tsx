import { access } from "fs";
import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
interface Props {
  status: string;
  date: string;
  name: string;
  description: string;
  acceptence: any;
}

export const Task = (props: Props) => {
  const {} = props;
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
      </style>
      <div
        className={
          props.status === "green" ? styles.container1 : styles.container2
        }
      >
        <h2 className={styles.header}>
          {props.name} {props.date}
        </h2>
        <div className={styles.description}>
          <p className={styles.description_text}>{props.description}</p>
        </div>
        {props.acceptence !== null ? (
          <div className={styles.acceptence}>
            <div className={styles.acceptence_text}>
              <span>Готово </span>
              <pre> </pre>
              {props.acceptence}%
            </div>
          </div>
        ) : (
          <></>
        )}
        <footer className={styles.task_footer}>
          <p className={styles.p}>Обзор</p>
          <p className={styles.p}>Закрыть</p>
        </footer>
      </div>
    </>
  );
};
