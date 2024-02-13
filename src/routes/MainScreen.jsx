import { useNavigate } from "react-router-dom";
import "../styles/MainSrceen.css";
import { useState } from "react";
const Pages = [
  {
    page: 1,
    text: "2024 год. Февраль через считанные дни наступит долгожданный праздник всех влюбленных 14 февраля , День Святого Валентина.Один парень по имени Никита, решил сделать валентинку для своей любимойдевушки.Он долго делал ее, очень старался и надеялся что ейпонравится. И наконец он дождался праздника, и спешил поздравитьсвою девушку. Он как ни в чем не бывало , шел по улице к своейлюбимой, и услышал знакомое мяуканье. Пиздюк! Сразу подумалНикита.(так звали кота Маргириты, девушки Никиты).Никита испугалсячто с Пиздюком что то случилось , и решил пойти на звук, и зашел втемный переулок.Там его ждал Пиздюк.",
  },
  {
    page: 2,
    text: "Привет Пиздюк - сказал Никита. Мяу Мяу Мяу - сказал Пиздюк.(Никита понимал кошачий язык, и мог спокойно разговаривать с ним, потому что Маргарита часто называла его котенком. Далее весь кошачий язык будет сразу переведен на руский, чтобы все понимали о чем они говорили).Ты уже подготовил валентинку для Маргариты? - спросил пиздюк. Да , вот смотри какая красивая - Никита показал валентинку Пиздюку. И тут резко Пиздюк вырвал валентинку из Никитиных рук, кинулся убегать. Никита не долго думая погнался за Пиздюком. Как Пиздюк мог так поступить? Так нагло украть валентинку? - пока бежал , думал Никита",
  },
  {
    page: 3,
    text: "Никита проследил за Пиздюком. Пиздюк зашел в заведение под названием КОТОБАР. Никита аккуратно подошел с зади, и застал Пиздюка в расплох! Где моя валентинк , живо говори , вредный кот! - гневался Никита. Пф-ф-ф , щас , разбежался - надменным голос сказал пиздюк. Мне она тоже нужна, я тоже хочу поздравить Маргариту с Днем Святого Валентина, но у меня лапки, а не руки, и я не могу сделать валентинку - грустным тоном пробурчал Пиздюк.Никита и Пиздюк были друзья, и он бы мог подарить ему свою валентинку ,а сам сделать новую. Но вот незадача, они договорились с Маргаритой встретиться и она уже вот вот прийдет ,и времени чтобы сделать новую просто нету!",
  },
  {
    page: 4,
    text: "Пиздюк понял что мог бы заранее попросить Никиту сделать 2 валентинки , но уже было слишком поздно, но и просто отдавать валентинку он не хотел. Эй Никита, не грусти, я отдам тебе твою валентинку, но... - хитро промолвил пиздюк. Что но? - уточнил Никита. Ты должен будшь выполнить пару заданий,чтобы вернуть свою валентинку - сказал Пиздюк. Я все сделаю, сказал Никита.",
  },
];
function MainSrceen() {
  const navigate = useNavigate();
  const [showDesc, setShowDesc] = useState(false);
  const [page, setPage] = useState(0);
  const handleShowDesc = () => {
    setShowDesc(true);
  };
  const handleNextPage = () => {
    setPage(page + 1);
  };
  console.log(page);
  return (
    <div className="main-box" onClick={handleShowDesc}>
      {showDesc ? (
        <div className="cont-1">
          <span className="game-title">Предыстория</span>

          <span className="text-1">{Pages[page].text}</span>
          {page != 3 ? (
            <span onClick={handleNextPage} className="next-page">
              Далее
            </span>
          ) : (
            <span onClick={() => navigate("first")} className="next-page">
              Начать выполнять задания!
            </span>
          )}
        </div>
      ) : (
        <div className="cont-1">
          <span className="game-title">
            Игра приключение "Спаси валентинку"
          </span>
          <span className="text-1">
            Для самой прекрасной девушки (Моей Маргариты)
          </span>
          <span className="text-1">От Никиты :)</span>
          <span className="text-2">
            Для того чтобы начать нажми в любое место
          </span>
        </div>
      )}
    </div>
  );
}
export default MainSrceen;