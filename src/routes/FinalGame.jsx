import styles from "../styles/FinalGame.module.css";
import Questions from "../components/Questions";
function FinalGame() {
  return (
    <div className={styles.fullScreenContainer}>
      <div className={styles.heartContainer1}>
        <div className={styles.heart}></div>
      </div>

      <div className={styles.heartContainer2}>
        <div className={styles.heart}></div>
      </div>

      <div className={styles.heartContainer3}>
        <div className={styles.heart3}></div>
      </div>

      <div className={styles.heartBox}>
        <span className={styles.gameTitle}>
          Ты уже почти у цели, ответь правильно на все вопросы Пиздюка чтобы
          вернуть валентинку
          <img className={styles.titleCat} src="images/titleCat.png"></img>
        </span>
      </div>
      <Questions />
    </div>
  );
}
export default FinalGame;
