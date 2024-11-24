import React from "react";
import { Button } from "@mui/material";
import s from "./Navbar.module.scss";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../shared/model";

type Props = {
  page: string;
};

const Navbar = ({ page }: Props) => {
  // const dispatch = useAppDispatch();
  // const user = useAppSelector((state) => state.user.user);
  // const handleOnLogout = () => {
  //   dispatch(userLogout());
  // };
  const dispatch = useAppDispatch();
  const setAuth = (value: any) => {
    dispatch({ type: "SET_AUTH", isAuth: value });
  };
  const navigator = useNavigate();
  return (
    <div className={s.navbar}>
      <div className={s.content}>
        <div className={s.menu}>
          <a
            onClick={() => {
              navigator("/home");
            }}
            style={{ cursor: "pointer" }}
            className={page === "home" ? "home" : ""}
          >
            <h3 className={s.menu_item}>Главная</h3>
          </a>
          <a
            onClick={() => {
              navigator("/calendar");
            }}
            style={{ cursor: "pointer" }}
            className={page === "calendar" ? "calendar" : ""}
          >
            <h3 className={s.menu_item}>Календарь</h3>
          </a>
          <a
            onClick={() => {
              navigator("/conban");
            }}
            style={{ cursor: "pointer" }}
            className={page === "conban" ? "conban" : ""}
          >
            <h3 className={s.menu_item}>Доски</h3>
          </a>
          <a
            onClick={() => {
              navigator("/graph");
            }}
            style={{ cursor: "pointer" }}
            className={page === "conban" ? "conban" : ""}
          >
            <h3 className={s.menu_item}>Граф</h3>
          </a>
        </div>
        <Button
          onClick={() => {
            setAuth(false);
            navigator("/");
          }}
          size="small"
          variant="contained"
          color="error"
        >
          ВЫЙТИ
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
