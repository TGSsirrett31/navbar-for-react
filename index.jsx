import React from 'react';
import './index.css';

function NavBar({ logo, link1, link2, link3, link4, link1_direction, link2_direction, link3_direction, link4_direction, backgroundColor, textColor }) {
    let l1 = `${link1_direction}`;
    let l2 = `${link2_direction}`;
    let l3 = `${link3_direction}`;
    let l4 = `${link4_direction}`;

    console.log(l1);

    return (
        <div className="navbar" style={{ backgroundColor: backgroundColor }}>
            <h1 className="navbar__logo" style={{ color: textColor }}>{logo}</h1>

            <ul>
                <li><a href={l1} style={{ color: textColor }}>{link1}</a></li>
                <li><a href={l2} style={{ color: textColor }}>{link2}</a></li>
                <li><a href={l3} style={{ color: textColor }}>{link3}</a></li>
                <li><a href={l4} style={{ color: textColor }}>{link4}</a></li>
            </ul>
        </div>
    );
};

export default NavBar;
