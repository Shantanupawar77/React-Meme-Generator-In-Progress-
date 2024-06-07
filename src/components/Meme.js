import React from "react";
import ReactDOM from "react-dom";
import "../index.css"
import data from "../MemesData"

export default function Meme() {
    const [memeName, setNameImage]=React.useState("")
    const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/30b1gx.jpg")

    function handleClick(){
        function randomNumber() {
            const maxIndex = 99 - 1;
            return Math.floor(Math.random() * (maxIndex + 1)); 
        }
        const number = randomNumber();

        setNameImage(data.data.memes[number].name);
        setMemeImage(data.data.memes[number].url)
    }

    return (
        <main>
            <div action="" className="form">
                <input type="text" placeholder="Do something first" className="form--input"/>
                <input type="text" placeholder="Do something second" className="form--input" />
                <button onClick={handleClick} className="form--button">Get a new meme Image</button>
            </div>
            <div>
                <h2>{memeName}</h2>
                <img src={memeImage} alt="" width={"200px"} height={"200px"} className="meme--image"/>
            </div>
            
        </main>
    )
}