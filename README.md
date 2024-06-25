# Navbar for React

[![npm version](https://badge.fury.io/js/navbar-for-react.svg)](https://badge.fury.io/js/navbar-for-react)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

Una forma sencilla de crear una barra de navegación en tus proyectos de React.

## Instalación

Puedes instalar el paquete usando npm o yarn:

```bash
npm install navbar-for-react
```
o
```bash
yarn add navbar-for-react
```

# Uso

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

Tú pagina se deberia de ver así:

![Imagen de la pagina](https://i.postimg.cc/jjgC9rNW/img.png)

# NOTA:

Recuerda poner los colores en hex. En caso de no poner colores, o no ponerlos bien, el NavBar tendrá de fondo un color blanco y el color del texto será negro

Tú pagina se veria así:

![Imagen de la pagina 2](https://i.postimg.cc/Ssnjbt7g/img2.png)

También se puede usar la propiedad **logoImg**, que en vez de mostrar un texto en el logo, mostrará una imagen, pero tienes que decidir entre la imagen y el texto, no puedes poner los dos.

Si haces los pasos correctamente, tú codigo se veria así:

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

Y tú pagina tal que así:

![Imagen de la pagina 3](https://i.postimg.cc/tg1T2KsR/img3.png))

## Props

| Prop               | Tipo     | Descripción                                         |
|--------------------|----------|-----------------------------------------------------|
| `logoText`         | `string` | El texto que se mostrará como logo.                 |
| `logoImg`          | `string` | La URL de la imagen que se mostrará como logo.      |
| `link1`            | `string` | Texto del primer enlace de navegación.              |
| `link2`            | `string` | Texto del segundo enlace de navegación.             |
| `link3`            | `string` | Texto del tercer enlace de navegación.              |
| `link4`            | `string` | Texto del cuarto enlace de navegación.              |
| `link1_direction`  | `string` | URL del primer enlace de navegación.                |
| `link2_direction`  | `string` | URL del segundo enlace de navegación.               |
| `link3_direction`  | `string` | URL del tercer enlace de navegación.                |
| `link4_direction`  | `string` | URL del cuarto enlace de navegación.                |
| `backgroundColor`  | `string` | Color del fondo del NavBar.                         |
| `textColor`        | `string` | Color del texto del NavBar.                         |
| `hoverColor`       | `string` | Color al pasar el mouse por los links. Pred: Azul   |

# HELP:

Si necesitas ayuda puedes irte al forum de nuestro canal de discord:

**[![button](https://img.shields.io/badge/Button-Click%20Here-blue)](https://discord.gg/C5ZZebVjcC)**