import React from "react"
import ReactDOM from "react-dom"

ReactDOM.render(<h1>Hi React!</h1>,document.getElementById("root1"))
//It's not HTML it's JSX.(JavaScript XML)
function MainContent(){
    return(<h1>I'm Learning React!</h1>)
}

ReactDOM.render(
    <MainContent/>, //The function name must start with Upper Case
    document.getElementById("root2")
)

const navbar=(
    <nav>
        <h1>My Website</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

/*Single parent element should be used in JSX.
IN this case <nav> is the parent tag/element*/

ReactDOM.render(
    navbar,
    document.getElementById("root3")
)