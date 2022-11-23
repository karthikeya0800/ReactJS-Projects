import React from "react"
import Content from "./components/Content"
import Dices from "./components/Dices"
import Roll from "./components/Roll"
import { nanoid } from "nanoid"

export default function App() {

    const [elements, setElements] = React.useState(randomNumbers())
    const [isComplete, setIsComplete] = React.useState(true)

    function randomNumbers() {
        const ele = []
        for (let i = 0; i < 10; i++) {
            ele.push({
                value: Math.floor(Math.random() * 6 + 1),
                isHeld: false,
                id: nanoid()
            })
        }
        return ele
    }

    const ele = elements.map(vals =>
        <Dices
            id={vals.id}
            value={vals.value}
            isHeld={vals.isHeld}
            hold={holdDice}

        />
    )

    function holdDice(id) {
        setElements(arr => arr.map(obj => {
            return obj.id === id ? { ...obj, isHeld: !obj.isHeld } : obj
        }))
    }

    function onRoll() {
        if (isComplete) {
            setElements(randomNumbers())
        } else {
            setElements(arr => arr.map(obj => {
                return obj.isHeld ? { ...obj } : { ...obj, value: Math.floor(Math.random() * 6 + 1) }
            }))
        }
    }
    function complete() {
        let x = elements[0].isHeld
        let arr = [elements[0].value]
        for (let i = 1; i < 10; i++) {
            if (elements[i].isHeld === false) {
                x = false
                break
            } else if (elements[i].value !== arr[i-1]) {
                x = false
                break
            } else {
                arr.push(elements[i].value)
            }
        }
        if (x === true) {
            console.log("Yes");
            setIsComplete(true)
        } else
            setIsComplete(false)
    }

    React.useEffect(()=>complete(),elements)

    return (
        <div className="main">
            <div className="innermain">
                <Content />
                <div className="dice">{ele}</div>
                <Roll
                    onRoll={onRoll}
                    isComplete={isComplete}
                />
            </div>
        </div>
    )
}