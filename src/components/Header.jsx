import React from 'react'
import headerDeco from "../assets/deco-qoute.png"

export default function Header() {
    return (
        <header>
            <span className="bg-txt txt-1">QUOTES</span>
            <div className="header-deco_">
                <img src={headerDeco} alt="quote of the day" />
                <span className="bg-txt txt-2">QUOTES</span>
            </div>
        </header>
    )
}
