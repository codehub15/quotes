import React, { useState, useEffect } from 'react';
import quotes from '../quotes-data.js';
// import '../style/style-default.css';

export default function Quotes() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const [qoute, setQoute] = useState("");
    const [styleBtn, setStyleBtn] = useState("");
    const [stylePath, setStylePath] = useState("");

    let firstStyle = () => {
        setStylePath(require('../style/style-one.css'));
    }

    let secondStyle = () => {
        setStylePath(require('../style/style-two.css'));
    }

    let defaultStyle = () => {
        setStylePath(require('../style/style-default.css'));
    }

    let checkBtn = (e) => {
        console.log("check:", e.target.className)
        setStyleBtn(e.target.className)

        // switch (styleBtn) {
        //     case "style-one":
        //         console.log("btn:", styleBtn);
        //         return setStyle(require('../style/style-one.css'));
        //     // break;
        //     case "style-two":
        //         console.log("btn:", styleBtn);
        //         return setStyle(require('../style/style-two.css'));
        //     // break;
        //     default:
        //         console.log("btn:", styleBtn);
        //         return setStyle(require('../style/style-default.css'));
        // }
    }

    let checkStyle = () => {
        console.log(stylePath)
    }


    useEffect(() => {
        checkStyle()
    }, [stylePath])

    return (
        <>
            {/* <link rel="stylesheet" type="text/css" href={stylePath} /> */}
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
