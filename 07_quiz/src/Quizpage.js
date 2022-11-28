import React from "react"

export default function Quizpage(props) {

    const { id, question, options, selected, correct_answer } = props.questionObj
    const [isClicked,setIsClicked]=React.useState(false) //Used to toggle option selection when clicked again
    function handleOptionClick(option, id) {
        setIsClicked(()=>!isClicked)
        props.setAllQuestions(props.allQuestions.map(val => (
            id === val.id ? { ...val, selected: option} : val
        )))
    }

    function updateOptionColor(option) {
        if (props.isChecked) {
            if (option === correct_answer) {
                return { background: "#94D7A2", border: "none" }
            } else if (option === selected) {
                return { background: "#F8BCBC", border: "none" };
            } else {
                return { opacity: "0.5" }
            }
        } else {
            if (selected === option && isClicked) {
                return { background: "#D6DBF5", border: "none" }
            }
        }
    }

    const optionTags = options.map(option => {
        return (
            <p
                key={option}
                className="option"
                onClick={() => !props.isChecked && handleOptionClick(option, id)}
                style={updateOptionColor(option)}
            >
                {option}
            </p>
        )
    }
    )

    return (
        <div>
            <h3 className="question">{question}</h3>
            <div className="options">
                {optionTags}
            </div>
            <hr className="underline"></hr>
        </div>
    )
}