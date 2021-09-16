import React, { useState, useEffect } from 'react';
// import quotes from '../quotes-data.js';
import btnDeco from "../assets/deco-btn.png"

export default function Quotes() {
    const [quotes, setQuotes] = useState([]);
    const [anotherQuote, setAnotherQuote] = useState("");

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetch("https://type.fit/api/quotes")
            .then(res => res.json())
            .then(data => {
                setQuotes(data)
            })
    }

    const quoteResult = quotes.map((quote, index) => {
        return <div key={quote.index}>
            <p>
                {quote.text}
            </p>
            <p className="author">
                {quote.author}
            </p>
        </div>
    })

    let randomQuote = quoteResult[Math.floor(Math.random() * quoteResult.length)];

    let getAnotherQuote = () => {
        setAnotherQuote(quoteResult[Math.floor(Math.random() * quoteResult.length)])
    }

    return (
        <>
            <div className="container">
                <div className="quote-section">
                    <blockquote>
                        <i class="fas fa-quote-left quote-icon quote-icon-one"></i>
                        {randomQuote}
                        <i class="fas fa-quote-right quote-icon quote-icon-two"></i>
                    </blockquote>
                </div>
                <button className="btn-new" onClick={() => getAnotherQuote()}>
                    <img src={btnDeco} alt="" width="200" />
                </button>
            </div>
        </>
    )
}
