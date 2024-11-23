import styles from "./styles.module.scss";
import { headerImg } from "../../../imgs";
interface Props {
  mode: any;
}

export const Header = (props: Props) => {
  const {} = props;

  return (
    <header className={styles.header}>
      <img className={styles.header_img} src={headerImg} alt="error" />
      <p style={props.mode ? { color: "black" } : {}}>flux</p>
    </header>
  );
};
