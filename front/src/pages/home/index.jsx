import styles from "./styles.module.scss";
import { CustomFooter, Button } from "../ui";
import { useEffect, useState } from "react";
import { CustomSlider, NavBar, Graph } from "../../widgets";

export const Home = () => {
  const [mode, setMode] = useState(false);
  const [name, setName] = useState("Семён");
  const [extend, setExtend] = useState(false);
  const [message, setMessage] = useState(1);
  useEffect(() => {
    console.log("Страница главного меню");
  });
  const changeStyles = () => {
    if (mode === false) {
      if (extend === true) {
        return styles.messageEx;
      } else {
        return styles.message;
      }
    } else {
      if (extend === true) {
        return styles.messageWhiteEx;
      } else {
        return styles.messageWhite;
      }
    }
  };

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
          <NavBar mode={mode} extend={extend} />

          {!extend ? <CustomSlider mode={mode}></CustomSlider> : <></>}
          <div
            className={changeStyles()}
            style={!extend ? { paddingLeft: "15%" } : {}}
          >
            {!extend ? (
              <>
                <p className={!mode ? styles.message_p : styles.message_pWhite}>
                  На этой неделе вы
                  <br /> закрыли
                </p>
                <p
                  className={!mode ? styles.message_p : styles.message_pWhite}
                  style={{ fontSize: "70px", marginTop: "1.5%" }}
                >
                  {message + " "} Задачу
                </p>
                <p
                  className={!mode ? styles.message_p : styles.message_pWhite}
                  onClick={() => {
                    setExtend(!extend);
                  }}
                  style={{
                    width: "15%",
                    fontSize: "30px",
                    marginTop: "2.5%",
                    cursor: "pointer",
                  }}
                >
                  Подробнее
                </p>
              </>
            ) : (
              <></>
            )}
            {!extend ? (
              <div
                className={styles.message_img}
                style={{ right: "15%" }}
              ></div>
            ) : (
              <></>
            )}

            {extend ? <Graph></Graph> : <></>}

            {extend ? (
              <Button
                mode={mode}
                onClick={() => {
                  setExtend(!extend);
                }}
                style={{
                  backgroundColor: "transparent",
                  position: "absolute",
                  bottom: "6%",
                  right: "calc(50% - 15% / 2)",
                }}
                text="Обзор"
              ></Button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <CustomFooter mode={mode} setMode={setMode} />
    </>
  );
};
