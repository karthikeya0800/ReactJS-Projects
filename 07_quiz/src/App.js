import React from "react"
import Home from "./Home"
import Quizpage from "./Quizpage"
import { nanoid } from "nanoid"

export default function App() {

    const [quiz, setQuiz] = React.useState([])
    const [finalScore, setFinalScore] = React.useState(0)
    const [question, setQuestion] = React.useState(questionAndOptions())

    React.useEffect(function () {
        fetch("https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple")
            .then(res => res.json())
            .then(data => setQuiz(data.results))
    }, [])

    function questionAndOptions(){
        return(
            quiz.map(ques => {
                const optionsArray = ques.incorrect_answers.concat([ques.correct_answer])
                const optionsObj = optionsArray.map(ele => {
                    return ({
                        "value": ele,
                        "id": nanoid(),
                        "isClicked": false,
                        "correct": ques.correct_answer,
                        "score":false
                    })
                })
                return({
                    "id":nanoid(),
                    "question":ques.question,
                    "options":optionsObj,
                    "score":false
                })
            })
        )
    }
    console.log(questionAndOptions())
    console.log(question)               //Error Here question not updating in useState
    const quizItems = question.map(obj=>{
        return(
            <Quizpage
            id={obj.id}
            question={obj.question}
            options={obj.options}
            setQuestion={setQuestion}
            allQuestions={question}
            />
        )
    })
    
    return (
        <div className="main">
            {/* <Home/> */}
            {quizItems}

        </div>
    )
}