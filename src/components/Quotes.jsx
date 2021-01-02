import React from 'react'
import quotes from '../quotes-data.js'

export default function Quotes() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return (
        <div className="container">
            <div className="quote-section">
                <blockquote>
                    <q>
                        {randomQuote}
                    </q>
                </blockquote>
            </div>
            <button className="btn-new">get new one</button>
        </div >
    )
}
