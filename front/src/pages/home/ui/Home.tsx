import s from "./Home.module.scss";

const Home = () => {
  return (
    <div>
      <div className={s.today_list}></div>
      <div className={s.statistics}></div>
      <div className={s.conbana}></div>
    </div>
  );
};

export default Home;
