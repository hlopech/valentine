import { useNavigate } from "react-router-dom";
import styles from "../styles/EndGameScreen.module.css";

function EndGameScreen() {
  const navigate = useNavigate();
  return (
    <div className={styles.mainBox} onClick={() => navigate("/prize")}>
      <div className={styles.cont1}>
        <span className={styles.gameTitle}>
          Молодец! Ты справился(-ась) со всеми заданиями Пиздюка и он решил
          вернуть тебе валентинку!
        </span>
        <span className={styles.text2}>
          Для того чтобы получить ее нажми в любое место
        </span>
      </div>
    </div>
  );
}
export default EndGameScreen;
