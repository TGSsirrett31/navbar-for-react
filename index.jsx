import React from 'react';
import propTypes from 'prop-types';
import './index.css';
import NavBarDefault from './otherStyles/NavBarCommon';
import NavBarWithoutLogo from './otherStyles/NavBarWithoutLogo';

const ALLOWED_STYLES = ["common", "withoutLogo"];

function NavBar({
  style, logoText, logoImg, link1, link2, link3, link4,
  link1_direction, link2_direction, link3_direction, link4_direction,
  backgroundColor, textColor, hoverColor = 'blue'
}) {
  if (!link2) {
    return <h1>You have to put minimum 2 links</h1>;
  }

  let l1 = `${link1_direction}`;
  let l2 = `${link2_direction}`;
  let l3 = `${link3_direction}`;
  let l4 = `${link4_direction}`;

  if (style === "common") {
    if ((!logoText && !logoImg) || (logoText && logoImg)) {
      return <h1>You must provide either a logo text or a logo image, but not both</h1>;
    }

    return (
      <NavBarDefault
        logoText={logoText}
        logoImg={logoImg}
        link1={link1}
        link2={link2}
        link3={link3}
        link4={link4}
        l1={l1}
        l2={l2}
        l3={l3}
        l4={l4}
        backgroundColor={backgroundColor}
        textColor={textColor}
        hoverColor={hoverColor}
      />
    );
  }

  if (style === "withoutLogo") {
    if (logoText && logoImg) {
      return <h1>You can't provide a logo image or a logo text, because the style you selected is Without Logo</h1>;
    }

    if (backgroundColor) {
      return <h1>You can't provide a background color, because the background color must be transparent</h1>;
    }

    return (
      <NavBarWithoutLogo
        link1={link1}
        link2={link2}
        link3={link3}
        link4={link4}
        l1={l1}
        l2={l2}
        l3={l3}
        l4={l4}
        hoverColor={hoverColor}
      />
    );
  }
  return null;
}

NavBar.propTypes = {
    style: propTypes.oneOf(ALLOWED_STYLES),
    logoText: propTypes.string,
    logoImg: propTypes.string,
    link1: propTypes.string.isRequired,
    link2: propTypes.string.isRequired,
    link3: propTypes.string,
    link4: propTypes.string,
    link1_direction: propTypes.string,
    link2_direction: propTypes.string,
    link3_direction: propTypes.string,
    link4_direction: propTypes.string,
    backgroundColor: propTypes.string,
    textColor: propTypes.string,
    hoverColor: propTypes.string
};


NavBar.DefaultProps = {
  style: 'common'
};

export default NavBar;