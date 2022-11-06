import React from "react"
import memesData from "../memesData";
export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prevStatus => ({
            ...prevStatus,
            randomImage: memesArray[randomNumber].url
        })
        )

    }
    return (
        <main>
            <div className="form">
                <input placeholder="Top Text" className="form--input" type="text" />
                <input placeholder="Bottom Text" className="form--input" type="text" />
                <button onClick={getMemeImage} className="form--button">Get a new meme image 🖼️</button>
            </div>
            <img className="meme--image" src={meme.randomImage} />
        </main>
    )
}