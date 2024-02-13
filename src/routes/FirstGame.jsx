import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/FirstGame.module.css";

function FirstGame() {
  const navigate = useNavigate();
  const [board, setBoard] = useState(Array(9).fill(null)); // Игровое поле
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  const [winCount, setWinCount] = useState(0);

  useEffect(() => {
    // Проверка на победителя после каждого хода
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of winningLines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        setWinCount(winCount + 1); // Увеличиваем счетчик победы
        return;
      }
    }

    // Проверка на ничью
    if (!board.includes(null)) {
      setIsDraw(true);
    }

    // Ход компьютера
    if (currentPlayer === "O" && !winner && !isDraw) {
      const emptyCells = board.reduce((acc, cell, index) => {
        if (!cell) acc.push(index);
        return acc;
      }, []);

      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const cellIndex = emptyCells[randomIndex];
      const newBoard = [...board];
      newBoard[cellIndex] = "O";
      setBoard(newBoard);
      setCurrentPlayer("X");
    }
  }, [board, currentPlayer, winner, isDraw]);

  // Функция для получения изображения в зависимости от значения в ячейке
  const getImage = (value) => {
    if (value === "X") {
      return (
        <img
          className={styles.image1}
          src="images/nikitaTicTacToe.png"
          alt="X"
        />
      );
    } else if (value === "O") {
      return (
        <img
          className={styles.image1}
          src="images/pizdukTicTacToe.png"
          alt="O"
        />
      );
    } else {
      return null;
    }
  };

  // Обработчик клика по ячейке
  const handleCellClick = (index) => {
    if (!board[index] && !winner && !isDraw) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer("O");
    }
  };

  // Обработчик клика по кнопке "Новая игра"
  const handleNewGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setIsDraw(false);
    setCurrentPlayer("X");
  };
  console.log(winCount);
  return (
    <div className={styles.mainBox}>
      <span className={styles.gameTitle}>
        Задание 1 : выйграть пиздюка 3 раза в Крестики-нолики
      </span>
      {winCount !== 6 ? (
        <div className={styles.board}>
          {board.map((cell, index) => (
            <div
              key={index}
              className={styles.cell}
              onClick={() => handleCellClick(index)}
            >
              {getImage(cell)}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      {(winner || isDraw) && (
        <div className={styles.gameResult}>
          {winner ? (
            <span className={styles.winnerText}>
              Победитель: {winner === "X" ? "Никита" : "Пиздюк"}
            </span>
          ) : (
            <span className={styles.winnerText}>Ничья!</span>
          )}
          {winCount !== 6 ? (
            <button className={styles.newGameBtn} onClick={handleNewGame}>
              Новая игра
            </button>
          ) : (
            <span
              onClick={() => navigate("/second")}
              className={styles.nextGame}
            >
              Следующее задание
            </span>
          )}
        </div>
      )}
      <span className={styles.count}>Счет :{winCount / 2}</span>
    </div>
  );
}

export default FirstGame;
