import React from "react"

export default function Header(){
    return(
    <header>
      <nav className="nav">           
          <img alt ="" className="nav-logo" src="react-logo.png"/>
          <h3>React Facts</h3> 
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
      </nav>
    </header>
    )
}