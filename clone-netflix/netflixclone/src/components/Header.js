import React from "react";
import './Header.css';

export default ({active}) => {
    return (
        <header className={active?'active':''}>
            <div className='header--logo'>
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="NETFLIX" />
                </a>
            </div>
            <div className='header--users'>
                <a href="/">
                    <img src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="" />
                </a>
            </div>
        </header>
    )
}