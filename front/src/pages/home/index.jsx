import styles from "./styles.module.scss";
import { CustomFooter } from "../ui";
import { useEffect, useState } from "react";
import { Button } from "../ui";
import { CustomSlider } from "../../widgets";
export const Home = () => {
  const [mode, setMode] = useState(false);
  const [name, setName] = useState("Семён");
  const [extend, setExtend] = useState(false);
  const [message, setMessage] = useState("На этой неделе вы закрыли 3 задачи ");
  useEffect(() => {
    console.log("Страница главного меню");
  });
  const changeStyles = () => {
    if(mode=== false){
      if(extend===true){
        return styles.messageEx;
      }
      else{
        return styles.message;
      }
    }
    else{
      if(extend===true){
        return styles.messageWhiteEx;
      }
      else{
        return styles.messageWhite;
      }
    }
  }
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
          {!extend ? <CustomSlider mode={mode}></CustomSlider> : <></>}
          <div className={changeStyles()}>
            <p className={!mode ? styles.message_p : styles.message_pWhite}>
              {message}
            </p>
            <Button
              mode={mode}
              onClick={()=>{setExtend(!extend)}}
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
