import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubes } from '@fortawesome/free-solid-svg-icons'
import './Footer.css';

export default function Footer() {
    return(
        <footer>
            <div className="container">
                <div className="row footer--row">
                    <div className="">Copyright © 2022, TRACTIAN.</div>
                    <div className="">
                        <a href="#"><FontAwesomeIcon icon={faCubes} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}