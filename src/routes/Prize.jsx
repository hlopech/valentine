import { useNavigate } from "react-router-dom";
import styles from "../styles/Prize.module.css";

function Prize() {
  return (
    <div class={styles.container}>
      <div class={styles.card}>
        <div class={styles.envelope}></div>

        <h1>
          Ты CSS <em>Для </em> <em>моего HTML</em>
        </h1>
        <h1>
          Я <em> Тебя </em> <em>Люблю</em>
        </h1>

        <div class={styles.heart}></div>
      </div>
    </div>
  );
}
export default Prize;
