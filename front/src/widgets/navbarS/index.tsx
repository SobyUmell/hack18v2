import styles from "./styles.module.scss";
import { Button } from "../../pages/ui/button";
import { useNavigate } from "react-router-dom";

interface Props {
  mode: any;
  extend: any;
}

export const NavBar = (props: Props) => {
  const {} = props;
  const nav = useNavigate();
  return (
    <>
      {!props.extend ? (
        <div className={styles.navbar}>
          <Button
            type={""}
            mode={props.mode}
            style={{ marginRight: "10px", width: "35%" }}
            text="создать"
            onClick={() => {
              nav("/newtask");
            }}
          />
          <Button
            type={""}
            mode={props.mode}
            style={{ width: "35%" }}
            text="ещё"
            onClick={() => {
              nav("/calendar");
            }}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
