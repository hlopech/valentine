import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/SecondGame.module.css";

function SecondGame() {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]); // Состояние карточек
  const [flippedCards, setFlippedCards] = useState([]); // Состояние перевернутых карточек
  const [matchedCards, setMatchedCards] = useState([]); // Состояние совпавших карточек
  const [count, setCount] = useState(0);
  useEffect(() => {
    const generateCards = () => {
      const symbols = [
        "images/cat7.png",
        "images/cat6.png",
        "images/cat5.png",
        "images/cat4.png",
        "images/cat3.png",
        "images/cat2.png",
        "images/cat1.png",
        "images/cat7.png",
        "images/cat6.png",
        "images/cat5.png",
        "images/cat4.png",
        "images/cat3.png",
        "images/cat2.png",
        "images/cat1.png",
        "images/cat7.png",
        "images/cat6.png",
        "images/cat5.png",
        "images/cat4.png",
        "images/cat3.png",
        "images/cat2.png",
        "images/cat1.png",
      ]; // Уникальные символы для карточек
      const tempCards = [];
      for (let i = 0; i < 12; i++) {
        const symbol = symbols[i];
        tempCards.push({ id: i * 2, symbol });
        tempCards.push({ id: i * 2 + 1, symbol });
      }
      // Перемешиваем карточки
      const shuffledCards = tempCards.sort(() => Math.random() - 0.5);
      setCards(shuffledCards);
    };

    generateCards();
  }, []);

  const handleCardClick = (id) => {
    // Проверяем, что карточка еще не совпала и не перевернута
    if (!matchedCards.includes(id) && !flippedCards.includes(id)) {
      setFlippedCards([...flippedCards, id]);
      // Если перевернуто 2 карточки, проверяем совпадение
      if (flippedCards.length === 1) {
        const [firstCardId] = flippedCards;
        const [firstCard] = cards.filter((card) => card.id === firstCardId);
        const [secondCard] = cards.filter((card) => card.id === id);
        // Если карточки совпадают, добавляем их в совпавшие
        if (firstCard.symbol === secondCard.symbol) {
          setMatchedCards([...matchedCards, firstCardId, id]);
          setCount(count + 1);
        }
        // Сбрасываем перевернутые карточки после короткой задержки
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };
  console.log(count);
  return (
    <div className={styles.mainBox}>
      <span className={styles.gameTitle}>
        Задание 2: пройти игру Найди пару
      </span>
      <div className={styles.cardContainer}>
        {cards.map((card) => (
          <div
            key={card.id}
            className={`${styles.card} ${
              flippedCards.includes(card.id) ? styles.flipped : ""
            } ${matchedCards.includes(card.id) ? styles.matched : ""}`}
            onClick={() => handleCardClick(card.id)}
          >
            <img src={card.symbol} className={styles.image} />
            {/* <span className={styles.symbol}>{card.symbol}</span> */}
          </div>
        ))}
      </div>
      {count == 12 ? (
        <span onClick={() => navigate("/final")} className={styles.nextGame}>
          Следующее задание
        </span>
      ) : (
        ""
      )}
    </div>
  );
}

export default SecondGame;
