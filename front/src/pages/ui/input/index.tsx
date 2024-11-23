import styles from "./styles.module.scss";
interface Props {
  type: string;
  text: string;
  onChange: any;
  value: any;
  mode: any;
}

export const Input = (props: Props) => {
  const {} = props;

  return (
    <div className={styles.container}>
      <p className={!props.mode ? styles.p : styles.pWhite}>{props.text}</p>
      <input
        value={props.value}
        onChange={props.onChange}
        className={!props.mode ? styles.input : styles.inputWhite}
        type={props.type}
      />
    </div>
  );
};
