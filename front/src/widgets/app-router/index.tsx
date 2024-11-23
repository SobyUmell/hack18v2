import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const AppRouter = () => {
  const auth = useSelector((state: any) => state.auth.isAuth);
  const dispatch = useDispatch();
  const setAuth = (value: any) => {
    dispatch({ type: "SET_AUTH", auth: value });
  };
  useEffect(() => {
    console.log(auth);
  }, [auth]);
  return (
    <Routes>
      {auth
        ? privateRoutes.map(
            // роутинг для авторизированного пользователя
            (route, index) => (
              <Route key={index} element={route.component} path={route.path} />
            )
          )
        : publicRoutes.map(
            // роутинг для не авторизированного пользователя
            (route, index) => (
              <Route key={index} element={route.component} path={route.path} />
            )
          )}
    </Routes>
  );
  // Route path='*' - будет переносить нас на базовую страницу
};
