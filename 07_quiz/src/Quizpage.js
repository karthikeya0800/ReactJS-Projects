import React from "react"

export default function Quizpage(props) {

    const [options,setOptions]=React.useState(props.options)

    function handleOptionClick(id) {
        console.log("clicked",id);
        setOptions(ele => options.map(obj => (
            id === obj.id ? { ...obj, isClicked: !obj.isClicked } : { ...obj, isClicked: false }
        )))
    }

    function updateScore(){
        options.forEach(obj => {
            if(obj.isClicked && obj.value===obj.correct){
                console.log("insetques");
                props.setQuestion(ele=>props.allQuestions.map(ele=>(
                    ele.id===props.id?{...ele, score:!ele.score, options:options}:{...ele,options:options}
                )))
            }
        })
    }

    React.useEffect(()=>updateScore(),options)
    
    // console.log(props.options);

    const optionTags = options.map(option =>
        <p
            className="option"
            onClick={()=>handleOptionClick(option.id)}
            style={{background:option.isClicked?"#C4F1BE":""}}
        >
            {option.value}
        </p>)

    return (
        <div>
            <h3 className="question">{props.question}</h3>
            <div className="options">
                {optionTags}
                <hr></hr>
            </div>
            {/* <button className="check" onClick={final()}>Check answers {finalScore}</button> */}
        </div>
    )
}