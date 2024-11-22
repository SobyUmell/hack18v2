import styles from "./styles.module.scss";
interface Props {
  type: string;
  text: string;
  onChange: any;
  value: any;
}

export const Input = (props: Props) => {
  const {} = props;

  return (
    <div className={styles.container}>
      <p className={styles.p}>{props.text}</p>
      <input
        value={props.value}
        onChange={props.onChange}
        className={styles.input}
        type={props.type}
      />
    </div>
  );
};
