# Navbar for React

[![npm version](https://badge.fury.io/js/navbar-for-react.svg)](https://badge.fury.io/js/navbar-for-react)
[![CI Tests](https://github.com/TGSsirrett31/navbar-for-react/actions/workflows/ci.yml/badge.svg)](https://github.com/TGSsirrett31/navbar-for-react/actions/workflows/ci.yml)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A simple way to create a navigation bar in your React projects.

## Installation

You can install the package using npm or yarn:

```bash
npm install navbar-for-react
```
o
```bash
yarn add navbar-for-react
```

# Usage

```jsx
import React from 'react';
import NavBar from 'navbar-component-react';

const App = () => {
  return (
    <NavBar 
      logoText="MyLogo"
      link1="Home"
      link2="About"
      link3="Services"
      link4="Contact"
      link1_direction="/"
      link2_direction="/about"
      link3_direction="/services"
      link4_direction="/contact"
      backgroundColor="#000"
      textColor="#fff"
    />
  );
};

export default App;
```

Your page should look like this:

![Imagen de la pagina](https://i.postimg.cc/jjgC9rNW/img.png)

# NOTE:

Remember to use hex color codes. If you don't specify colors or specify them incorrectly, the NavBar will have a white background and black text by default.

Your page would look like this:

![Imagen de la pagina 2](https://i.postimg.cc/Ssnjbt7g/img2.png)

You can also use the **logoImg** property, which will show an image instead of text for the logo, but you have to choose between the image and the text, you can't use both.

If you follow the steps correctly, your code would look like this:

```jsx
import React from 'react';
import NavBar from 'navbar-component-react';
import logoImg from './ruta/del/archivo'

const App = () => {
  return (
    <NavBar 
      logoImg={logoImg}
      link1="Home"
      link2="About"
      link3="Services"
      link4="Contact"
      link1_direction="/"
      link2_direction="/about"
      link3_direction="/services"
      link4_direction="/contact"
      backgroundColor="#000"
      textColor="#fff"
    />
  );
};

export default App;
```

And your page would look like this:

![Imagen de la pagina 3](https://i.postimg.cc/tg1T2KsR/img3.png))

## Props
| Prop               | Type     | Required | Default | Description                                                                 |
|--------------------|----------|----------|---------|-----------------------------------------------------------------------------|
| `logoText`         | `string` | No       | -       | The text to be displayed as the logo.                                       |
| `logoImg`          | `string` | No       | -       | The URL of the image to be displayed as the logo.                           |
| `link1`            | `string` | Yes      | -       | Text of the first navigation link.                                          |
| `link2`            | `string` | Yes      | -       | Text of the second navigation link.                                         |
| `link3`            | `string` | No       | -       | Text of the third navigation link.                                          |
| `link4`            | `string` | No       | -       | Text of the fourth navigation link.                                         |
| `link1_direction`  | `string` | No       | -       | URL of the first navigation link.                                           |
| `link2_direction`  | `string` | No       | -       | URL of the second navigation link.                                          |
| `link3_direction`  | `string` | No       | -       | URL of the third navigation link.                                           |
| `link4_direction`  | `string` | No       | -       | URL of the fourth navigation link.                                          |
| `backgroundColor`  | `string` | No       | `#fff`  | Background color of the NavBar.                                             |
| `textColor`        | `string` | No       | `#000`  | Text color of the NavBar.                                                   |
| `hoverColor`       | `string` | No       | `blue`  | Hover color for the links.                                                  |

# HELP:

If you need help, you can visit our Discord channel forum:

**[![Discord](https://img.shields.io/badge/Button-Click%20Here-blue)](https://discord.gg/C5ZZebVjcC)**