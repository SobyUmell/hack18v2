import styles from "./styles.module.scss";
interface Props {
  text: string;
  type: any;
}

export const Button = (props: Props) => {
  const {} = props;

  return (
    <button  type={props.type} className={styles.btn}>
      {props.text}
    </button>
  );
};
