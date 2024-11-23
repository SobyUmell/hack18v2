import styles from "./styles.module.scss";
interface Props {
  text: string;
  type: any;
  onClick: any;
  style: any;
}

export const Button = (props: Props) => {
  const {} = props;

  return (
    <button
      style={props.style}
      onClick={props.onClick}
      type={props.type}
      className={styles.btn}
    >
      {props.text}
    </button>
  );
};
