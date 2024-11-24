import styles from "./styles.module.scss";
import { stick } from "../../imgs";
import { Input, Button, CustomFooter } from "../ui";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../ui/header";
import { useSelector } from "react-redux";
export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setAuth = (value: any) => {
    dispatch({ type: "SET_AUTH", isAuth: value });
  };
  const setMode = (value: any) => {
    dispatch({ type: "SET_MODE", mode: value });
  };
  const mode = useSelector((state:any) => state.mode.mode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const swap = () => {
    navigate("/sign-up");
    setEmail("");
    setPassword("");
  };
  const auth = (e: any) => {
    e.preventDefault();
    console.log("Авторизуемся мальчики");
    setAuth(true);
    navigate("/home");
  };
  useEffect(() => {
    console.log("Страница авторизации");
  }, []);

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
      </style>

      <Header mode={mode} />
      <div className={!mode ? styles.container : styles.containerWhite}>
        <div className={!mode ? styles.fluxImg : styles.fluxImgWhite}></div>
        <div className={styles.auth}>
          <p
            className={!mode ? styles.auth_left : styles.auth_leftWhite}
            onClick={auth}
          >
            Авторизация
          </p>
          <img className={styles.stick} src={stick} alt="error" />
          <p
            className={!mode ? styles.auth_right : styles.auth_rightWhite}
            onClick={swap}
          >
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
            onChange={(e: any) => setPassword(e.target.value)}
            value={password}
            text="Пароль"
            type="password"
          />
          <Button
            mode={mode}
            style={{}}
            onClick={auth}
            text="Далее"
            type={"submit"}
          />
        </form>
      </div>
      <CustomFooter setMode={setMode} mode={mode} />
    </>
  );
};
