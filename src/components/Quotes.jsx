import React, { useState } from 'react'
import quotes from '../quotes-data.js'

export default function Quotes() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const [qoute, setQoute] = useState("");

    return (
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
        </div >
    )
}
