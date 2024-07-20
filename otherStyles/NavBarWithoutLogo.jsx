import React, { useState, useEffect } from "react";
import '../index.css';

function NavBarWithoutLogo({ link1, link2, link3, link4, l1, l2, l3, l4, textColor }) {
    const [scroll, setScroll] = useState(0);
    const [activeLink, setActiveLink] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(document.documentElement.scrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className="nav-bar-container">
            <div className={`nav-bar ${scroll > 20 ? 'move' : ''}`}>
                <ul>
                    <li>
                        <a
                            href={l1}
                            style={{ color: textColor }}
                            className={activeLink === l1 ? 'active' : ''}
                            onClick={() => handleLinkClick(l1)}
                        >
                            {link1}
                        </a>
                    </li>
                    <li>
                        <a
                            href={l2}
                            style={{ color: textColor }}
                            className={activeLink === l2 ? 'active' : ''}
                            onClick={() => handleLinkClick(l2)}
                        >
                            {link2}
                        </a>
                    </li>
                    {link3 && (
                        <li>
                            <a
                                href={l3}
                                style={{ color: textColor }}
                                className={activeLink === l3 ? 'active' : ''}
                                onClick={() => handleLinkClick(l3)}
                            >
                                {link3}
                            </a>
                        </li>
                    )}
                    {link4 && (
                        <li>
                            <a
                                href={l4}
                                style={{ color: textColor }}
                                className={activeLink === l4 ? 'active' : ''}
                                onClick={() => handleLinkClick(l4)}
                            >
                                {link4}
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default NavBarWithoutLogo;
