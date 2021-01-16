import React, { useState, useEffect } from 'react';
import quotes from '../quotes-data.js';
// import '../style/style-default.css';

export default function Quotes() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const [qoute, setQoute] = useState("");
    const [styleBtn, setStyleBtn] = useState("");
    const [stylePath, setStylePath] = useState("");

    let firstStyle = (e) => {
        let targetClass = e.target.className
        setStyleBtn(targetClass)
        setStylePath(require('../style/style-one.css'));
    }

    let secondStyle = (e) => {
        let targetClass = e.target.className
        setStyleBtn(targetClass)
        setStylePath(require('../style/style-two.css'));
    }

    let defaultStyle = (e) => {
        let targetClass = e.target.className
        setStyleBtn(targetClass)
        setStylePath(require('../style/style-default.css'));
    }

    // let changeStyle = (e) => {
    //     let targetClass = e.target.className
    //     setStyleBtn(targetClass)
    // }

    useEffect(() => {
        console.log("btn:", styleBtn)
        if (styleBtn.includes("style-one")) {
            // firstStyle()
            setStylePath(require('../style/style-one.css'));
        }
        else if (styleBtn.includes("style-two")) {
            // secondStyle()
            setStylePath(require('../style/style-two.css'));
        }
        else {
            console.log("else")
            // defaultStyle()
            setStylePath(require('../style/style-default.css'));
        }
    }, [stylePath])

    return (
        <>
            <div className="container">
                <div className="quote-section">
                    <blockquote>
                        <q>
                            {!qoute ? randomQuote : qoute}
                        </q>
                    </blockquote>
                </div>
                <button className="btn-new" onClick={() => setQoute(randomQuote)}>
                    get new one
                </button>
                <div className="style-btn-container">
                    <button className="style-btn style-one" onClick={firstStyle}>style one</button>
                    <button className="style-btn style-two" onClick={secondStyle}>style two</button>
                    <button className="style-btn style-default" onClick={defaultStyle}>default style</button>
                </div>
            </div>
        </>
    )
}
