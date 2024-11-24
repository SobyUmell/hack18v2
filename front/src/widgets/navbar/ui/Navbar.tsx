import React from "react";
import { Button } from "@mui/material";
import s from "./Navbar.module.scss";

type Props = {
  page: string;
};

const Navbar = ({ page }: Props) => {
  // const dispatch = useAppDispatch();
  // const user = useAppSelector((state) => state.user.user);
  // const handleOnLogout = () => {
  //   dispatch(userLogout());
  // };

  return (
    <div className={s.navbar}>
      <div className={s.content}>
        <div className={s.menu}>
          <a href="/home" className={page === "home" ? "home" : ""}>
            <h3 className={s.menu_item}>Главная</h3>
          </a>
          <a href="/calendar" className={page === "calendar" ? "calendar" : ""}>
            <h3 className={s.menu_item}>Календарь</h3>
          </a>
          <a href="/conban" className={page === "conban" ? "conban" : ""}>
            <h3 className={s.menu_item}>Доски</h3>
          </a>
        </div>
        <Button size="small" variant="contained" color="error">
          ВЫЙТИ
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
