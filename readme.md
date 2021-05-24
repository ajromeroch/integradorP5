# Ejercicio integrador
![logo-p5](https://postman-plataforma5.s3-sa-east-1.amazonaws.com/logo_plataforma_5_coding_bootcamp_azul.png)

## Planteo

La idea de este ejercicio es reforzar algunos de los conceptos visto a lo largo del Bootcamp, y para ello tendrán como objetivo 
crear una  RESTful API de distintos productos y categorías, usando Node, Express y Sequelize (Postgres).


## Desarrollo

### 1. Modelo

El modelo principal es el de productos. Algunos criterios que deberían respetar son los siguientes:
<br>
<div>
<h4>♦ Debería contar con 5 campos:</h4>
  <ul>
    <li><b>Nombre:</b> String</li>
    <li><b>Precio:</b> Integer</li> 
    <li><b>Descripción:</b> String</li>
    <li><b>Disponible:</b> Boolean. Default value debe ser true</li>
    <li><b>Stock:</b> Integer</li>
  </ul>
</div>
      
   <h4>♦ Método de clase:</h4>
      Debe tener al menos uno que diga cuántos productos se encuentran sin stock (no disponibles).
   <h4>♦ Método de instancia:</h4>
    Debe tener al menos uno que calcule cuánta ganancia podría tener un producto teniendo en cuenta el stock y el precio.
   <h4>♦ Getter: </h4>
    Debe tener uno que devuelva el precio con el simbolo "$" por delante.
   <h4>♦ Setter:</h4>
    Debe tener uno que cambie la propiedad disponible a false una vez que el stock llegue a 0.
   <h4>♦ Hook:</h4>
    Antes de que un producto sea creado, debe agregársele la frase "NO DISPONIBLE" al título en caso de que no haya stock.

El segundo modelo es el de categorías, que cuentan solamente con un campo (el nombre). Deben tener en cuenta que un producto puede pertenecer a más de una categoría.

### 2. Rutas

<h4>Las rutas principales son 5:</h4>

  - Una ruta para obtener todos los productos.
  - Una ruta para obtener un producto en particular.
  - Una ruta para crear un producto.
  - Una ruta para modificar un producto en particular.
  - Una ruta para eliminar un producto.

<br>

⚠️ <b>Aclaración</b> ⚠️ : La ruta para obtener todos los productos puede recibir una query de categorías.

Deberán, por lo tanto, analizar qué endpoints van a crear en base a las rutas requeridas y qué métodos aplicar (GET, POST, PUT, DELETE)

### 3. Pasos iniciales

- Generá un nuevo **repositorio**.
- Creá tu base de datos, podés llamarla "integradorback".
- Instalá las dependencias necesarias.
- Asegurate de realizar toda la configuración inicial.
- 
<hr>

### 📌 Extra credit 📌

Reemplazar el hook, por un setter en "disponibilidad" de forma tal que cada vez que cambia la disponibilidad del producto, el titulo cambie dinámicamente, poniendo y sacando el "NO DISPONIBLE", ya que con el hook solo se haría en la creación!