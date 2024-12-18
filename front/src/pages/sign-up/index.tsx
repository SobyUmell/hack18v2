import styles from "./styles.module.scss";
import { stick } from "../../imgs";
import { Input, Button, CustomFooter } from "../ui";
import { useState, useEffect } from "react";
import { Header } from "../ui/header";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AuthService from "../../services/AuthService";
export const SignUp = () => {
  const dispatch = useDispatch();
  const setMode = (value: any) => {
    dispatch({ type: "SET_MODE", mode: value });
  };
  const mode = useSelector((state: any) => state.mode.mode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const swap = () => {
    navigate("/");
    setEmail("");
    setPassword("");
    setName("");
  };
  const registration = async (email: any, password: any) => {
    console.log("Попытка регистрации");
    try {
      const responce = await AuthService.registration(email, password);
      console.log(responce);
      localStorage.setItem("token", responce.data.accessToken);
      navigate("/");
    } catch (e: any) {
      console.log(e.responce?.data?.message);
    }
  };
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
            onClick={() => {
              registration(email, password);
            }}
            text="Далее"
            type={"submit"}
          />
        </form>
      </div>
      <CustomFooter setMode={setMode} mode={mode} />
    </>
  );
};
