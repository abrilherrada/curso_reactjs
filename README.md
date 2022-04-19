# Librería El túnel

https://ephemeral-sunburst-830511.netlify.app/

## Descripción

El siguiente proyecto consiste en un e-commerce de libros. Los productos se dividen en categorías por edad (niños, adolescentes y adultos).

## Objetivos

Este proyecto tiene los siguientes objetivos:

-   Brindar a los usuarios la posibilidad de comprar libros en línea de forma sencilla e intuitiva.
-   Permitir que los usuarios puedan encontrar lo que buscan con rapidez mediante la división de los productos en categorías.
-   Ofrecer a los usuarios información sobre las compras que realizaron.

## Contenido

-   Navbar responsive que incluye lo siguiente:
    -   Logo con enlace a la página de inicio.
    -   Enlances a las categorías de productos.
    -   Botón para ir a la página de inicio de sesión o al perfil del usuario si este ya inició sesión.
    -   Botón para ir al carrito de compras. En el carrito de compras, se puede ver un desglose de los productos seleccionados, quitar los productos seleccionados y finalizar la compra. Para eso, se pide al usuario información adicional que se verifica antes de proceder.
-   Página de inicio, donde se muestran todos los productos disponibles.
-   Páginas de productos filtrados por categorías.
-   Detalle de cada producto, al cual se puede acceder desde el botón que se encuentra en la tarjeta de cada producto. El detalle incluye, además de la imagen, el título y el autor, una descripción del libro, el precio y la opción para agregar el producto al carrito con la cantidad deseada.
-   Página de inicio de sesión (si el usuario ya está registrado) o de registro.
-   Perfil del usuario, en el que cada usuario puede ver sus compras realizadas y cerrar la sesión (que es persistente de forma local).
-   Uso de contextos para gestionar la lógica global y separar responsabilidades.
-   Estilos creados con SCSS. Por una cuestión de practicidad y funcionamiento del compilador de SCSS que utilicé, opté por almacenar todos los estilos en un directorio (/styles), divididos en diferentes archivos que reciben el nombre del componente al que modifican.

## Dependencias

La aplicación de El túnel utiliza varios proyectos de código abierto para lograr su funcionamiento:

| Dependencia      | Enlace                       | Versión | Propósito                                                                              |
| ---------------- | ---------------------------- | ------- | -------------------------------------------------------------------------------------- |
| React js         | https://reactjs.org/         | ^17.0.2 | Creación de la interfaz de usuario                                                     |
| React Router DOM | https://reactrouter.com/     | ^6.2.2  | Gestión de layout de navegación entre componentes                                      |
| Firebase         | https://firebase.google.com/ | ^9.6.10 | Gestión de autenticación de usuarios y almacenamiento de productos y órdenes de compra |
| Font Awesome     | https://fontawesome.com/     | ^1.3.0  | Uso de íconos                                                                          |
| Sweet Alert      | https://sweetalert.js.org/   | ^2.1.2  | Uso de alertas predeterminadas para la interacción con el usuario                      |
