import styles from "./styles.module.scss";
interface Props {
  text: string;
  type: any;
  onClick: any;
  style: any;
  mode: any;
}

export const Button = (props: Props) => {
  const {} = props;

  return (
    <button
      style={props.style}
      onClick={props.onClick}
      type={props.type}
      className={!props.mode ? styles.btn:styles.btnWhite}
    >
      {props.text}
    </button>
  );
};
