import React from "react"
import Nav from "./Components/Nav"
import data from "./Components/data"
import Place from "./Components/Place"

export default function App(){
    const secItems=data.map(vals=>{
        return(
            <Place
                key={vals.title}
                {...vals}
            />
        )
    })
    return(
        <div>
            <Nav/>
            <section className="place--list">
                {secItems}
            </section>
        </div>
    )
}