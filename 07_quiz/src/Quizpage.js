import React from "react";

export default function Quizpage(props) {
  const { id, question, options, selected, correct_answer } = props.questionObj;

  // console.log(props.options);

  function handleResult(option) {
    if (props.isChecked) {
      if (option === correct_answer) {
        return "darkgreen";
      }
      if (selected !== correct_answer && option === selected) {
        return "red";
      }
    }

    if (selected === option) {
      return "yellow";
    }
  }

  const optionTags = props.questionObj.options.map((option) => (
    <p
      className="option"
      key={option}
      onClick={() => props.handleOptionClick(option, props.questionObj.id)}
      style={{
        background: handleResult(option),
      }}>
      {option}
    </p>
  ));

  return (
    <div>
      <h3 className="question">{props.questionObj.question}</h3>
      <div className="options">
        {optionTags}
        <hr></hr>
      </div>
      {/* <button className="check" onClick={final()}>Check answers {finalScore}</button> */}
    </div>
  );
}
