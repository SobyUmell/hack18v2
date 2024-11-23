import styles from "./styles.module.scss";
import { stick } from "../../imgs";
import { Input, Button, CustomFooter } from "../ui";
import { useState, useEffect } from "react";
import { Header } from "../ui/header";
export const SignUp = () => {
  const [mode, setMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const swap = () => {
    window.location.href = "/";
    setEmail("");
    setPassword("");
    setName("");
  };
  const register = () => {
    console.log("регистрируемся мальчики");
  };
  useEffect(() => {
    console.log("Страница регистрации");
  });
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
      </style>

      <Header mode={mode} />
      <div className={!mode ? styles.container : styles.containerWhite}>
        <div className={mode ? styles.fluxImg : styles.fluxImgWhite}></div>
        <div className={styles.auth}>
          <p
            className={!mode ? styles.auth_left : styles.auth_leftWhite}
            onClick={swap}
          >
            Авторизация
          </p>
          <img className={styles.stick} src={stick} alt="error" />
          <p className={!mode ? styles.auth_right : styles.auth_rightWhite}>
            Регистрация
          </p>
        </div>
        <form className={styles.form} action="">
          <Input
            mode={mode}
            onChange={(e: any) => setEmail(e.target.value)}
            value={email}
            text="Почта"
            type="email"
          />
          <Input
            mode={mode}
            onChange={(e: any) => setName(e.target.value)}
            value={name}
            text="Имя"
            type="text"
          />
          <Input
            mode={mode}
            onChange={(e: any) => setPassword(e.target.value)}
            value={password}
            text="Пароль"
            type="password"
          />
          <Button
            mode={mode}
            style={{}}
            onClick={register}
            text="Далее"
            type={"submit"}
          />
        </form>
      </div>
      <CustomFooter setMode={setMode} mode={mode} />
    </>
  );
};
