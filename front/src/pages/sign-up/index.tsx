import styles from "./styles.module.scss";
import { headerImg } from "../../imgs";
import { stick } from "../../imgs";
import { Input, Button, CustomFooter } from "../ui";
import { useState, useEffect } from "react";
export const SignUp = () => {
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

      <header className={styles.header}>
        <img className={styles.header_img} src={headerImg} alt="error" />
        <p>flux</p>
      </header>
      <div className={styles.container}>
        <div className={styles.fluxImg}></div>
        <div className={styles.auth}>
          <p className={styles.auth_left} onClick={swap}>
            Авторизация
          </p>
          <img className={styles.stick} src={stick} alt="error" />
          <p className={styles.auth_right}>Регистрация</p>
        </div>
        <form className={styles.form} action="">
          <Input
            onChange={(e: any) => setEmail(e.target.value)}
            value={email}
            text="Почта"
            type="email"
          />
          <Input
            onChange={(e: any) => setName(e.target.value)}
            value={name}
            text="Имя"
            type="text"
          />
          <Input
            onChange={(e: any) => setPassword(e.target.value)}
            value={password}
            text="Пароль"
            type="password"
          />
          <Button style={{}} onClick={register} text="Далее" type={"submit"} />
        </form>
      </div>
      <CustomFooter />
    </>
  );
};
