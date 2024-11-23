import styles from "./styles.module.scss";
import { CustomFooter } from "../ui";
import { useEffect, useState } from "react";
import { Button } from "../ui";
import { CustomSlider } from "../../widgets";
export const Home = () => {
  const [mode, setMode] = useState(false);
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
      <div className={!mode ? styles.container : styles.containerWhite}>
        <div className={styles.wrapper}>
          <p className={!mode ? styles.p : styles.pWhite}>
            Приветствуем, {name}
          </p>
          <CustomSlider mode={mode}></CustomSlider>
          <div className={!mode ? styles.message : styles.messageWhite}>
            <p className={!mode ? styles.message_p : styles.message_pWhite}>
              {message}
            </p>
            <Button
              mode={mode}
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
      <CustomFooter mode={mode} setMode={setMode} />
    </>
  );
};
