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
import NavBar from 'navbar-for-react';

const App = () => {
  return (
    <NavBar 
      logo="MiLogo"
      link1="Inicio"
      link2="Acerca de"
      link3="Servicios"
      link4="Contacto"
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

## Props

| Prop               | Tipo     | Descripción                                         |
|--------------------|----------|-----------------------------------------------------|
| `logo`             | `string` | El texto o elemento que se mostrará como logo.      |
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
