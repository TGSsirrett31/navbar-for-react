import React, { useState, useEffect } from 'react';
import '../index.css';

function NavBarDefault({ logoText, logoImg, link1, link2, link3, link4, l1, l2, l3, l4, backgroundColor, textColor, hoverColor }) {

    const [scroll, setScroll] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScroll(document.documentElement.scrollTop);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <div className={`navbar ${scroll > 20 ? 'nav__mod' : ''}`} style={{ backgroundColor, '--hover-color': hoverColor }}>
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

export default NavBarDefault;