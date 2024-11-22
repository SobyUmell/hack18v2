import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../router";
import { useDispatch, useSelector } from "react-redux";

export const AppRouter = () => {
  const auth = useSelector((state: any) => state.isAuth);
  const dispatch = useDispatch();
  const setAuth = (value: any) => {
    dispatch({ type: "SET_AUTH", auth: value });
  };
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
      {auth ? (
        <Route path="*" element={<Navigate to={"/profile"} />} />
      ) : (
        <Route path="*" element={<Navigate to={"/auth-1"} />} />
      )}
    </Routes>
  );
  // Route path='*' - будет переносить нас на базовую страницу
};
