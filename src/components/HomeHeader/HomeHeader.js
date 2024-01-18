import React from 'react';
import { Link } from 'react-router-dom';
import './HomeHeader.css';

function HomeHeader() {
    return (
        <header>
            <div className="header-left">
                <Link to="/" className="a">Colorless</Link>
            </div>
            <div className="header-right">
                <Link to="/Error" className="a">Spacing</Link>
                <Link to="/Error" className="a">Size</Link>
                <Link to="/Error" className="a">Imagery</Link>
                <Link to="/Error" className="a">Guidance</Link>
                <Link to="/Error" className="a">Animation</Link>
            </div>
        </header>
    );
}

export default HomeHeader;
