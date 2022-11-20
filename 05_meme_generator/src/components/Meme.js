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
            topText:"",
            bottomText:"",
            randomImage: memesArray[randomNumber].url
        })
        )
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prev =>({
            ...prev,
            [name]:value
        }))
    }

    return (
        <main>
            <div className="form">
                <input
                    placeholder="Top Text"
                    className="form--input"
                    type="text"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />

                <input
                    placeholder="Bottom Text"
                    className="form--input"
                    type="text"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />

                <button
                    onClick={getMemeImage}
                    className="form--button"
                >
                    Get a new meme image 🖼️
                </button>
            </div>

            <div className="meme">
                <img className="meme--image" src={meme.randomImage} />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}