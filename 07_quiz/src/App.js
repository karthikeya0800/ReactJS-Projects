import React from "react";
import Home from "./Home";
import Quizpage from "./Quizpage";
import { nanoid } from "nanoid";

export default function App() {
  const [quiz, setQuiz] = React.useState([]);
  const [finalScore, setFinalScore] = React.useState(0);
  const [allQuestions, setAllQuestions] = React.useState([]);

  React.useEffect(function () {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        setQuiz(data.results);
        const temp = questionAndOptions(data.results);
        setAllQuestions(temp);
      });
  }, []);

  function questionAndOptions(quiz) {
    return quiz.map((ques) => {
      const optionsArray = ques.incorrect_answers.concat([ques.correct_answer]);
      return {
        ...ques,
        id: nanoid(),
        selected: "",
        options: optionsArray,
      };
    });
  }

  // console.log(questionAndOptions(quiz));

  function handleOptionClick(option, id) {
    console.log("clicked", option);
    const temp = allQuestions.map((ele) => {
      if (ele.id === id) {
        return { ...ele, selected: option };
      }
      return ele;
    });
    setAllQuestions(temp);
  }

  //   console.log(allQuestions); //Error Here question not updating in useState
  const [isChecked, setIsChecked] = React.useState(false);

  const quizItems = allQuestions.map((obj) => {
    return (
      <Quizpage
        key={obj.id}
        questionObj={obj}
        handleOptionClick={handleOptionClick}
        isChecked={isChecked}
      />
    );
  });

  function returnFinal() {
    let x = 0;
    allQuestions.map((ele) => {
      if (ele.selected === ele.correct_answer) {
        x++;
      }
    });
    setIsChecked(!isChecked);
    setFinalScore(x);
  }
  const [start, setStart] = React.useState(true);
  return (
    <div className="main">
      {start ? (
        <div className="home">
          <h1>Quizstar</h1>
          <p>ANSWER and WIN</p>
          <button onClick={() => setStart(false)}>Start quiz</button>
        </div>
      ) : (
        <>
          {quizItems}
          {isChecked ? (
            <p>Final Score : {finalScore}</p>
          ) : (
            <button className="check" onClick={returnFinal}>
              Check answers
            </button>
          )}
        </>
      )}
    </div>
  );
}
