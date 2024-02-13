import { useEffect, useState } from "react";
import "../styles/Questions.css";
import { useNavigate } from "react-router-dom";

const QUESTIONS = [
  {
    q: "А у меня ... в сердце",
    a: "зима",
  },
  {
    q: "Сколько у котиков лапок?",
    a: "4",
  },
  {
    q: "Как называется маленький ангел, который стреляет в сердца влюбленных из лука?",
    a: "Купидон",
  },
  {
    q: "Как зовут самого лучшего котика в мире?",
    a: "маргарита",
  },
  {
    q: "Бин ...",
    a: "Ватафак",
  },
  {
    q: "Его называют паркурщиком",
    a: "Даник",
  },
];

function Questions() {
  const [arr, setArr] = useState(QUESTIONS);
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate()
  const [currentQuestion, setCurrentQuestion] = useState(
    arr[Math.floor(Math.random() * arr.length)]
  );

  useEffect(() => {
    if (arr.length == 0) {
      navigate("/end")
    }
  });

  const handleCheckAnswer = () => {
    if (
      answer.toLowerCase().trim() === currentQuestion.a.toLowerCase().trim()
    ) {
      setAnswer("");
      const updatedQuestions = arr.filter((q) => q.q !== currentQuestion.q);
      setArr(updatedQuestions);
      if (updatedQuestions.length > 0) {
        setCurrentQuestion(
          updatedQuestions[Math.floor(Math.random() * updatedQuestions.length)]
        );
      }
    }
  };
  return (
    <div className="box">
      <div className="question-cont">
        <span className="question">{currentQuestion?.q}</span>
      </div>
      <div className="cont1">
        <input
          className="input"
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <img
          onClick={handleCheckAnswer}
          src="images/heartBtn.png"
          className="heartBtn"
          alt="Submit"
        />
      </div>
      <span className="question-result"></span>
    </div>
  );
}

export default Questions;
