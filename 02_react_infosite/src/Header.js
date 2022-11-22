import React from "react"

export default function Header(props){
    return(
    <header>
      <nav className="nav">           
          <img alt ="" className="nav-logo" src="react-logo.png"/>
          <h3>React Facts</h3>
          <h5>Light</h5>
          <div class={props.mode?"toggledark":"togglelight"} onClick={props.handleMode}>
            <div class={props.mode?"circledark":"circlelight"}></div>
          </div>
          <h5>Dark</h5>
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
      </nav>
    </header>
    )
}