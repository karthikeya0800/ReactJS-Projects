import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App(){
    const cardItems=data.map(vals=>{
        return (
            <Card
                key={vals.id}
                {...vals}
                /*item={vals}*/
                
                /*img={vals.coverImg}
                reviewCount={vals.stats.reviewCount}
                location={vals.location}
                title={vals.title}
                price={vals.price}
                rating={vals.stats.rating}
                openSpots={vals.openSpots}*/
            />
        )
    })
    return(
        <div>
            <Navbar/>
            <Hero/>
            <section className="card--list">
                {cardItems}
            </section>
        </div>
    )
}