import React, { useState, useEffect } from "react";
import "./App.css";
import { Meme, Memes } from "./Components/Memes";

export default function App() {
    const [memes, setMemes] = useState([]);
    const [meme, setMeme] = useState(null);
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((response) => response.json())
            .then((data) => {
                console.log(data.data.memes);
                setMemes(data.data.memes);
            });
    }, []);
    return ( <
            div className = "App" >
            <
            h1 > Meme Generator < /h1> { meme ? < Meme meme = { meme }
            setMeme = { setMeme }
            /> : <Memes memes={memes} setMeme={setMeme} / >
        } <
        /div>
);
}