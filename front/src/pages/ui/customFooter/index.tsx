import styles from "./styles.module.scss";
import { moon, tg, inst, gmail, vk } from "../../../imgs";

interface Props {}

export const CustomFooter = (props: Props) => {
  const {} = props;
  const mas = [tg, inst, gmail, vk];
  const nav_arr = [
    "https://t.me/conceptium",
    "",
    "",
    "https://vk.com/concept_tag",
  ];
  return (
    <footer className={styles.footer}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
      </style>
      <div className={styles.footer_corp}>
        <img className={styles.footer_img} src={moon} alt="error" />
        <p className={styles.p} style={{ transform: "xlate(0px, 15px)" }}>
          concept
        </p>
      </div>
      <div className={styles.footer_corp_links}>
        {mas.map((item, index) => (
          <img
            key={index}
            className={styles.footer_img_2}
            src={item}
            onClick={() => window.open(nav_arr[index], "_blank")}
            alt="error"
          />
        ))}
      </div>
      <p className={styles.footer_label}>
        © Concept. 2024 All rights reserved.
      </p>
    </footer>
  );
};
