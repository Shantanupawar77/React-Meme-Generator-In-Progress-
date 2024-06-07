import React from "react";
import ReactDOM from "react-dom";
import memeImage from "./meme_img.jpeg"
export default function Header(){
    return (
        <header className="header">
            <img src={memeImage} alt="" width={"31px"}height={"28px"} className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 header--text>React Course - Project 3</h4>
        </header>
    )
}