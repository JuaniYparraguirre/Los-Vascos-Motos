import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 /* Estilos generales */
html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: red;
}

.container {
    width: 80%;
    margin: 0 auto;
}

/* Encabezado */
header {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
}

header h1 {
    margin: 0;
}

/* Navegación */
nav {
    background-color: #444;
    padding: 10px 0;
}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: center;
}

nav ul li {
    display: inline;
    margin-right: 20px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    list-style: none;
}

a:visited {
    color: white;
}

/* Sección de productos */
.products {
    margin-top: 20px;
}

.product {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.product h2 {
    margin-top: 0;
}

.product p {
    margin-top: 10px;
}

.product img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
}

/* Pie de página */
footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
}

/* Media queries para diseño responsivo */
@media (max-width: 768px) {
    .container {
        width: 90%;
    }
}

`;
