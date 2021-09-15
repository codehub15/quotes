import React, { useState, useEffect } from 'react';
import quotes from '../quotes-data.js';
import btnDeco from "../assets/deco-btn.png"

export default function Quotes() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const [quote, setQuote] = useState("");

    return (
        <>
            <div className="container">
                <div className="quote-section">
                    <blockquote>
                        <i class="fas fa-quote-left quote-icon quote-icon-one"></i>
                        {!quote ? randomQuote : quote}
                        <i class="fas fa-quote-right quote-icon quote-icon-two"></i>
                    </blockquote>
                </div>
                <button className="btn-new" onClick={() => setQuote(randomQuote)}>
                    <img src={btnDeco} alt="" width="200" />
                </button>
            </div>
        </>
    )
}
