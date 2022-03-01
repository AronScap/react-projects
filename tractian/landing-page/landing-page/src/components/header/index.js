import React, { useState } from "react";
import Logo from '../../images/logo.svg';
import './Header.css';
import { MenuItems } from './MenuItems';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons'

export default ({active}) => {

    const [handleMenu,setHandleMenu] = useState(false);
    const setHandleMenuBar = () => {
        let menuStatus = !handleMenu;
        console.log(menuStatus);
        setHandleMenu(menuStatus);
    }
    return (
        <header className={active?'active':''}>
            <div className={'container'+(handleMenu?' container--active--menu':'')}>
                <div className="row row--header">
                    <div className='header--logo'>
                        <a href="/"><img src={Logo} alt="Logo" /></a>
                    </div>
                    <div className="header--menu">
                        <ul className={handleMenu?'active':''}>
                            {
                                MenuItems.map((item, key) => {
                                    return (
                                        <li key={key} className={item.cname}><a href={item.url}>{item.title}</a></li>
                                    );
                                })
                            }
                        </ul>
                        <div className="menu--bars" onClick={setHandleMenuBar}>
                            {!handleMenu && <FontAwesomeIcon icon={faBars} />}
                            {handleMenu && <FontAwesomeIcon icon={faTimes} />}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}