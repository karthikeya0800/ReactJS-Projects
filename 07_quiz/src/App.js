import React from "react"
import Quizpage from "./Quizpage"
import { nanoid } from "nanoid"

export default function App() {

    const [finalScore, setFinalScore] = React.useState(0)
    const [allQuestions, setAllQuestions] = React.useState([])
    const [isChecked, setIsChecked] = React.useState(false)
    const [start, setStart] = React.useState(false)

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10")
            .then(res => res.json())
            .then(data => setAllQuestions(questionAndOptions(data.results)))
    },[])

    function randomize(arr){
        return(
            arr.sort(()=>Math.random()-0.5)
        )
    }

    function questionAndOptions(quiz) {
        return (
            quiz.map(ques => {
                const optionsArray = ques.incorrect_answers.concat([ques.correct_answer])
                return (
                    {
                        "id": nanoid(),
                        "question": ques.question,
                        "options": randomize(optionsArray),
                        "selected": "",
                        "correct_answer": ques.correct_answer

                    }
                )
            })
        )
    }

    function updateScore() {
        setIsChecked(true)
        setFinalScore(() => {
            let temp = 0
            allQuestions.forEach(ele => {
                if (ele.selected === ele.correct_answer) {
                    temp++
                }
            })
            return temp
        });
    }

    const quizItems = allQuestions.map(obj => {
        return (
            <Quizpage
                key={obj.id}
                questionObj={obj}
                setAllQuestions={setAllQuestions}
                allQuestions={allQuestions}
                isChecked={isChecked}
            />
        )
    })

    return (
        <div className="main">
            {!start ?
                <div className="home">
                    <h1>Quizstar</h1>
                    <p>ANSWER and WIN</p>
                    <button onClick={() => setStart(!start)}>Start quiz</button>
                </div> :
                <>
                    {quizItems}
                    {isChecked ?
                        <div className="end">
                            <p>Your Score : {finalScore}/10</p>
                            <div className="bug">left a small bug😉</div>
                            <p className="playagain" onClick={() => window.location.reload(false)}>Play Again</p>
                        </div> :
                        <button className="check" onClick={updateScore}>
                            {isChecked ? finalScore : "Check answers"}
                        </button>
                    }
                </>
            }
        </div>
    )
}