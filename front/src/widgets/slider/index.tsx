import Slider from "react-slick";
import { settings } from "./module";
import styles from "./styles.module.scss";
import { Task } from "../task";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface Props {}

export const CustomSlider = (props: Props) => {
  const {} = props;

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        <Task
          description="что-то1"
          name="задача 1"
          date="21.03.23"
          status="green"
          acceptence={75}
        />
        <Task
          description="что-то2"
          name="задача 2"
          date="21.04.23"
          status="red"
          acceptence={0}
        />
        <Task
          description="что-то3"
          name="задача 3"
          date="21.05.23"
          status="red"
          acceptence={null}
        />
      </Slider>
    </div>
  );
};
