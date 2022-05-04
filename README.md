<h1 align="center">
  Music Gear Store
  <br>
</h1>
<p align="center" style="font-size: 1.2rem;">E-COMMERCE PROJECT</p>
<p align="left" style="font-size: 1rem;">Autor: Alan Maximiliano Ramirez</p>
<p align="left" style="font-size: 1rem;">Profesor: Conrado Lanusse</p>
<p align="left" style="font-size: 1rem;">Tutor: Julian Bragazzi</p>
<p align="left" style="font-size: 1rem;">CODERHOUSE - REACT JS</p>

<hr />

## Introducción

Este proyecto representa la entrega final del módulo de React JS de la carrera de Desarrollo Full Stack de Coderhouse. El mismo comprende la creación de una aplicación web mediante el uso de React, en la cual el usuario debera poder realizar la compra de distintos productos (sin incluir la integración a una pasarela de pagos). En este caso, los productos son instrumentos musicales y equipamiento, los cuales podrán ser filtrados accediento a las distintas secciones de la página. Además, se incluyeron secciones actualmente sin uso en la app, pero con el objetivo de utilizarlas en un futuro (Inicio, Nosotros y Login). Al accesar a estos links, tendremos acceso a secciones sin contenido.

## User story/brief

El usuario puede navegar por los productos (exhibidos en su totalidad en la home) e ir a sus detalles mediante click al botón "Ver mas".    
Desde el detalle se puede visualizar el nombre del producto, descripción, foto, precio, stock y puede agregarlo al carrito. 
Al realizar esta acción, aparecerá en pantalla el botón "Terminar mi compra". Accediendo a este botón, se puede visualizar un listado compacto de la orden con los productos, cantidades individuales y el precio total. Para avanzar con el proceso de compra, el usuario hará click nuevamente en el botón "Terminar mi compra".
En el checkout, el usuario debera ingresar su nombre, e-mail y telefóno. Luego se activará el botón de ‘Realizar compra’.
Luego de clickear en ‘Realizar compra’, se muestra un mensaje de compra exitosa, junto con el número de orden. La orden se guarda en la base de datos de Firestore, y contiene todos los productos, la fecha, número de orden y cantidades, junto con los datos del usuario.


## Contenidos

## Componentes
- [Cart](#Cart)
- [CartWidget](#CartWidget)
- [Checkout](#Checkout)
- [Item](#Item)
- [ItemCount](#ItemCount)
- [ItemDetail](#ItemDetail)
- [ItemDetailContainer](#ItemDetailContainer)
- [ItemList](#ItemList)
- [ItemListContainer](#ItemListContainer)
- [Navbar](#Navbar)

- [CartContext](#CartContext)

- [Agradecimientos](#Agradecimientos)

## Cart

Componente del carrito. El mismo se habilita luego de agregar un producto al carrito, y nos permite ver desde el navbar la cantidad de productos agregados al carrito. Además, contiene la funcionalidad para avanzar en el proceso de la compra.

## Checkout

Contiene el formulario y las funciones para realizar el envío de la información de la compra a Firebase

## Item

Componente de la tarjeta de producto, que permite la visualización del nombre, el stock y acceder al botón "Ver más". Realizado con React Bootstrap.

## ItemCount
Permite incrementar, decrementar y agregar productos al carrito.

## ItemDetail
Muestra el producto agregado al carrito, y permite el acceso a "Terminar mi compra"

## ItemDetailContainer
Realiza el muestreo de los productos y muestra el mensaje de carga

## ItemList
Lista de productos

## ItemListContainer
Contenedor de los productos. En él se efectúa el armado de la referencia de forma sincrónica y el llamado de manera asincrónica a esa referencia.

## Navbar
Barra de navegación. Contiene los links a las secciones de la página, el logo y el carrito. Realizado con React Bootstrap.

## CartContext
Contiene la funcionalidad para operar sobre el carrito, permitiendo obtener los items presentes en el carrito, cantidades, total, elimiar items y vaciar el carrito.

## Agradecimientos
Muchas gracias al profesor Conrado Lanusse, por explicar los conceptos de forma clara y concisa, y además por efectuar la resolución de los desafíos y explicarlos de manera sencilla. 
Además, agradecer al tutor Julian Bragazzi por estar siempre disponible para consultas y por las correcciones efectuadas sobre los desafíos. 