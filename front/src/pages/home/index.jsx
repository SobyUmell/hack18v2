import styles from "./styles.module.scss";
import { CustomFooter } from "../ui";
import { useEffect, useState } from "react";
import { Button } from "../ui";
import { CustomSlider } from "../../widgets";
export const Home = () => {
  const [name, setName] = useState("Семён");
  const [message, setMessage] = useState("На этой неделе вы закрыли 3 задачи ");
  useEffect(() => {
    console.log("Страница главного меню");
  });
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
      </style>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <p className={styles.p}>Приветствуем, {name}</p>
          <CustomSlider></CustomSlider>
          <div className={styles.message}>
            <p className={styles.message_p}>{message}</p>
            <Button
              style={{
                backgroundColor: "transparent",
                position: "absolute",
                bottom: "6%",
                right: "calc(50% - 15% / 2)",
                
              }}
              text="Обзор"
            ></Button>
          </div>
        </div>
      </div>
      <CustomFooter />
    </>
  );
};
