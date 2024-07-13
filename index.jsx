import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function NavBar({ logoText, logoImg, link1, link2, link3, link4, link1_direction, link2_direction, link3_direction, link4_direction, backgroundColor, textColor, hoverColor = 'blue' }) {
    if ((!logoText && !logoImg) || (logoText && logoImg)) {
        return <h1>You must provide either a logo text or a logo image, but not both</h1>;
    }

    if (!link2) {
        return <h1>You have to put minimum 2 links</h1>;
    }

    let l1 = `${link1_direction}`;
    let l2 = `${link2_direction}`;
    let l3 = `${link3_direction}`;
    let l4 = `${link4_direction}`;

    return (
        <div className="navbar" style={{ backgroundColor: backgroundColor, '--hover-color': hoverColor }}>
            {logoText && <h1 className="navbar__logo" style={{ color: textColor }}>{logoText}</h1>}
            {logoImg && <img src={logoImg} alt="Logo" className="navbar__logo img" />}

            <ul>
                <li><a href={l1} style={{ color: textColor }}>{link1}</a></li>
                <li><a href={l2} style={{ color: textColor }}>{link2}</a></li>
                {link3 && <li><a href={l3} style={{ color: textColor }}>{link3}</a></li>}
                {link4 && <li><a href={l4} style={{ color: textColor }}>{link4}</a></li>}
            </ul>
        </div>
    );
}

NavBar.propTypes = {
    logoText: PropTypes.string,
    logoImg: PropTypes.string,
    link1: PropTypes.string.isRequired,
    link2: PropTypes.string.isRequired,
    link3: PropTypes.string,
    link4: PropTypes.string,
    link1_direction: PropTypes.string,
    link2_direction: PropTypes.string,
    link3_direction: PropTypes.string,
    link4_direction: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    hoverColor: PropTypes.string
};

export default NavBar;