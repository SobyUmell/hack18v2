import styles from "./styles.module.scss";
import { headerImg, stick } from "../../imgs";
import { Input, Button, CustomFooter } from "../ui";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setAuth = (value: any) => {
    dispatch({ type: "SET_AUTH", isAuth: value });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const swap = () => {
    window.location.href = "/sign-up";
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

      <header className={styles.header}>
        <img className={styles.header_img} src={headerImg} alt="error" />
        <p>flux</p>
      </header>
      <div className={styles.container}>
        <div className={styles.fluxImg}></div>
        <div className={styles.auth}>
          <p className={styles.auth_left} onClick={auth}>
            Авторизация
          </p>
          <img className={styles.stick} src={stick} alt="error" />
          <p className={styles.auth_right} onClick={swap}>
            Регистрация
          </p>
        </div>
        <form className={styles.form} action="">
          <Input
            onChange={(e: any) => setEmail(e.target.value)}
            value={email}
            text="Почта"
            type="email"
          />
          <Input
            onChange={(e: any) => setPassword(e.target.value)}
            value={password}
            text="Пароль"
            type="password"
          />
          <Button style={{}} onClick={auth} text="Далее" type={"submit"} />
        </form>
      </div>
      <CustomFooter />
    </>
  );
};
