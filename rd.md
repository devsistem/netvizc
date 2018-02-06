reframes

  ### Material para creacion de wireframes
  *
# Disenio

### Herramientas de desarrollo Front End
* [AdobeColor - Paleta de colores](https://color.adobe.com)
* [Colors - Paleta de colores](https://coolors.co/app)
* [Hacer degradados css](http://www.cssmatic.com/)
* [Paleton - Paleta de colores](http://paletton.com/export/index.php)
* [Google Fonts - Fuentes](https://fonts.google.com/)
* (normalize - Normalizar codigo CSS)[http://necolas.github.io/normalize.css/]

### Documentacion
* [Metodologia SMACSS](http://smacss.com)
* [Metodologia BEM](http://getbem.com/introduction/)
* [OCSS](http://oocss.org)



# HTML

# CSS

## Estructura de un proyecto
###  [Metodologia SMACSS](http://smacss.com)
  

## CSS Conceptos y Sintaxis
### Selectores Simples
  * Selectores de tipo o etiqueta: Apunta a las etiquetas html, se debe usar solo en los estilos bases. `No se debe usar con estilos de disenio. ejm  background`

    ```
      div{}
    ```
  * Selectores id: No usarlos por que no se puede reutilizar el estilo.
    ```
      #id{}
    ```

  * selectores de clases: son los selectores que deben usarse con mas frecuencia.
  ```
    .menu-item {}
  ```
### Selectores Compuestos
  * Selectores decendientes: `Se debe evitar el uso de selectores decendientes`
    ```
      body h1{}
    ```
  * Selectores hijos directos:
    ```
      ul > span{}
    ```
  * Selectores hermano siguiente o adyacente:
    ```
      h1 + p{}
    ```
   * Selectores hermanos siguientes:
    ```
      h1 ~ p{}
    ```
   * Selectores combinados:
    ```
      h1.first{}
    ```
### Selectores Atributos
Los selectores de atributo usan corchetes para indicar el atributo
```
[href="www.facebook.com"]{}
```
### Selectores Agrupados
Los selectores de agrupados te permite agrupar elementos comunes con los cuales quieres compartir un estilo
```
clase1,
clase2{}
```

#### Comodines para selectores de atributos
* Comodin ^: comienza con
  ```
  [class^="menu-"]{
    background: yellow;
  }
  ```
* Comodin $: termina en
  ```
  [href$="pdf"]{
    display: block;
    background: url( http: ......) left / contain no repeat;
    padding-left 1.5em;
  }
  ```
* Comodin *: permite seleccionar a los elementos cuyos argumentos de la propiedad especificada contenga algo de lo especificado en el css.
  ```
  [href*="sea"]{
    color: green;
  }
  ```

`CSS4/ i: es equivalente a case insensitive` 
  ```
  [href*="sea" i]{
    color: green;
  }
  ```

### Especifidad `Solucion de conflictos de estilos`
  Es un algoritmo CSS por la cual se resuelven los conflictos de estilos.
  * selectores de tipo (type):   1
  * Selectores de clase (class): 10
  * Selectores de id (class):    100
  * Estilos en linea (inline):   1000
  * important!:                  siempre gana, pero no es recomendable usar

### Color
El color se puede especificar mediante los siguientes mecanismos
  * [Palabras clave](www.colors.commutercreative.com/grid)
  * [Hexadecimal RGB](www.color-hex.com): La notacion especificamos en los dos primeros digitos el rojo, los dos segundos verde y el ultimo par azul. Cada digito corresponde un valor exadecimal [1 - 9] y [a - f]
    + Trucos:
      + Si las parejas son iguales `00ffff` lo podemos abreviar las parejas como 0ff
      + Si los canales son iguales, los colores neutros (negros, grises y blancos).
  * RGB() y RGBA(): se expresa cada canal con un valor de 0 a 255 y el alfa con un valor entre 0 y 1. 
  * HSL() Hue Saturation Lightness: 
    + Hue [0 - 360]
    + Saturation [0 - 100%]
    + Lightness [0- 100%]
    
    

### Variables en CSS

El scope de un variable es en base al DOM
    ```
    h1{
      --color:red;
      background: var(--color);
    }
    ```
### Fuentes
  * font-size : Propiedad para editar el tamanio de la fuente
  * font-family : Promiedad para especificiar la familia
    + Serif
    + San-Serif o Palo seco
    + MonoSpace
  * line-height: altura de la linea
### Estilos de navegadores por defecto
Los navegadores ya vienen con estilos por defecto, para normalizar se realiza con librerias tales como (normalize)[http://necolas.github.io/normalize.css/]

### Cascada
......




### Pseudoclases
La pseudoclases se indican con `:`

* selector:hover : Se activa cuando el puntero esta sobre

* selector:active : Funciona cuando precionamos el elemento

* selector:visited : Cambia las propiedades de algo que hayamos visitado

* selector:target : hace simulaciones sin js

* selector:root : hace referencia  html

* selector:empty : hace referencia  a un elemento vacio: `p:empty{display:none;}`
* selector:not(selector) : hace una negacion de las anteriores 


### Pseudoclases de formularios
* selector:focus 
* selector:enabled
* selector:disabled  
* selector:checked 
* selector:optional
* selector:required
* selector:valid
* selector:invalid
* selector:in-range
* selector:out-of-range

### Pseudoclases child
Estas seundoclases toman en cuenta el orden de los hijos si contar con el tipo de hijo que se requiera
* selector:first-child : Selecciona el primer hijo
* selector:last-child : Selecciona  el ultimo hijo

* selector:nth-child(1) : Selecciona en la lista de "selectores" el numero que se especifica.
* selector:nth-last-child(1) : Hace la cuenta inversa que la que hace nth-child
* selector:only-child: si solo hay un hijo unico

### Pseudoclases TYPE
Estas seundoclases toman en cuenta el tipo de hijo y el orden
* selector:first-of-type : Selecciona el primer hijo del tipo especificada en el selector
* selector:last-of-type: Selecciona  el ultimo hijo el tipo especificada en el selector

* selector:nth-of-type(1) : Selecciona en la lista de "selectores" el tipo y numero que se especifica 
* selector:nth-last-of-type(1) : Hace la cuenta inversa que la que hace nth-child
* selector:only-child: si solo hay un hijo unico

### Pseudoelementos
Permiten seleccionar ciertos elementos del html

* selector::first-line : seleccion a la primera linea de un parrafo

* selector::first-letter : selecciona la primera letra.

* selector::selection : Especifica los estilos para el texto cuando es seleccionado

* selector::before : permite anadir contenido antes del elemento. con la etiqueta `content: 'Esto es un elemento'`

* selector::after : permite anadir contenido despues del elemento. con la etiqueta `content: 'Esto es un elemento'`
### `Modelo de Caja BOX MODEL`
En css solo existe rectangulas.
Contenido: h1, p,.....
Padding: margen interno
Border: Borde del elemento
Margin: Margen externo

#### Dimensiones de cajas
alto (height):
ancho (width):

* dimenciones declaradas
alto= height + padding + border
ancho = width + padding + border
`Para que el padding ni el border alteren los tamanios declarados se debe usar: box-sizing:border-box. El valor por defecto de box sizing es content-box`



#### Unidades de medida
* Relativas
  - Pixeles (px)
  - EM (em) : Relativo al tamanio del contenedor padre o del mas cercano.
  - REM (rem) :  Relativo al tamanio del body
  - Porcentaje ( % ):  Unidad de medida sumamente flexible, usado para hacer responsivo


* Absolutas
No se deben usar por que no son flexibles

#### Elementos 
* Elementos de bloque : son aquello que ocupan el 100% del espacion donde estan contenidos.
En este caso la propiedad Display viene seteada a block.

`Las propiedades que son configurables para estos elementos son: width, height, padding, border, margin`

Elementos: h1, p,

* Elementos de linea: Son aquellos que ocupan solo el espacio del elemento
En este caso la propiedad Display viene seteada a inline.

`Los elementos inline no tienen height ni width`
elementos: a span label img

#### Colapsado de margenes

Los margenes horizontales se suman pero los verticales se colapsan, el margen de mayor cantidad ganan

#### Propiedades

  - Relativa
  - Estatica
  - Absoluta
  - Fija
  - Flotant

* DISPLAY: Propiedad para especificar si un elemento es de linea o de bloque.
  - table: imita una tabla con css. `utilizado para tener una estructura similar a inline block pero que se pueda centrar y para ajuztar elementos flotantes, no usar imagenes`
    + table-cell
    + table-row
  - block: elemento bloque
  - inline: elemento de linea
  - inline-block: para que se ajusten a lado del otro y aun asi podamos usar las propiedades en block.

 * FLOAT:  Propiedad para hacer flotar a un componente con respecto al elemento padre.
  - none: 
  - right: Manda a flotar a lado derecho del elemento padre
  - left: Manda a flotar a lado izquierdo del elemento padre
  
Debido a que el height del elemento padre es igual a la altura maxima de sus hijos y estos pueden estar flotando se solucionan de las siguientes maneras.

  1. `overflow:hidden;`
  2. `display:table;`
  3. `Crear un div adicional y seteandole en css la propiedad clear:both`

 * OVERFLOW:  Propiedad para determinar como manejar el contenido que se salga de la caja
  + hidden: Oculta todo lo que esta fuera de la caja
  + auto: genera un scroll si lo necesita
  + scroll: genera un scroll
  + initial: `Valor por defecto`


* POSITION: 
  - static: (default)

  - relative:
    Conserva sus dimenciones originales.

    Conserva su posicion en el flujo,  podemos mover la caja desde su posicion original pero este deja el espacio que debe ocupar en blanco. las siguientes propiedades con las que se puede desplazar son las siguientes.
    + lef : Empujamos desde la izquierda hacia la derecha
    + top: Se mueve 20 px hacia abajo
    + right: Empujamo desde la derecha hacia la izquierda
    + button: Empujamoshacia arriba
    + z-index: Controlar el orden en las capas, el z-index solo funciona con relative. 
      `Es recomendable ir usando un incremento de z index de 10 en 10 o en 20 en 20, de tal manera que si hay que poner algun elemento en una capa intermedia se pueda realizar. `

      `Si quieres mandar detras a un seudolemento, este debe tener z-index negativo y el padre no debe tener z-index, caso contrario el pseudoelemento siempre estara delante`

  - absolute: 
    Sus dimenciones se adaptan al contenido, para especificar dimenciones se debe usar height y width.

    Su contexto es su ancestro posicionado mas cercano, `se pociciona tomando en referencia a su componente ancestro que tiene position: relative|absolute| fixed| sticky`

    Elemento no conserva su posicion en el flujo, Apila los elementos con posicion absolute obviando los objetos pocicionado con pocion relativa. Son invisibles y las demas cajas se ubican como si esta no existiese.

  - fixed: Mescla entre position relative y fixed. Debe especificarce el espacio de separacion para volverse fixed;
    
    Su contexto es el viewport
    
    Pierde espacio en el flujo
    
    Sus demenciones se ajustan al contenido, slavo que se especifique height y width
  
  - sticky

  * BOX-SIZING: 
    - content-box: Valor por defecto que al momento de generar un padding el tamanio de la caja se incrementa

    - `border box: El padding se agrega de forma interna sin afectar el tamanio de la caja` 


`Una de las conbinaciones mas usadas son position relative para el ancestro, position absolute para el hijo`



### FlexBox
  Modelo de layout, cuyas propiedades que nos permiten distribuir de una manera mas flexible

**Caja Padre FLEX-CONTAINER**
_______________________
  * DISPLAY 
    - flex : Crea un contexto flex para sus hijos, vuelve a todos los elementos hijos sean flexibles

      `display:flex|inline-flex;`
      
      + flex: La seccion declarada se comportara externamente como un block, ocupara el 100% de ancho horizontal.
      + inline-flex: La seccion declarada como flex-inline, se comportara externamente como un elemento inline, podran colocarse otros elementos a lado de este.

    * **flex-direction:**
      Propiedad que permite modificar el axis de flex
      + row : (default), en fila desde la izquierda
      + row-reverse : fila en sentido inverso desde la derecho
      + column : en columna desde arriba 
      + column-reverse : en columna desde abajo
    * **flex-wrap:**
      + nowrap : (default) cambia el tamanio de las cajas para acomodarlas en una sola linea
      + wrap : Cuando no exista mas espacion ubica en una nueva linea las demas cajas.
      + wrap-reverse: salto de linea en el orden inverso a las lineas

    * **`flex-flow`**
      Propiedad que incluye flex-direction y flex-wrap
      
      Ejm. `flex-flow: row wrap`

    * **justify-content** : Desplazamiento en el eje main y valido cuando `flex-wrap: wrap`
      - flex-start : (default)
      - flex-end
      - center
      - space-between
      - space-around
    * **align-items** : Desplazamiento en el eje cross
      - flex-start : Coloca arriba
      - flex-end : Coloca abajo
      - center : coloca en el centro
      - stretch : Calcula el 100% de altura, `siempre y cuando no exista height en la caja hija`.
      - baseline : alinea los textos en las cajas con las otras cajas

    * **align-content** Desplazamiento en el eje cross, `solo funciona cuando hay mas de una linea`
      - center : centra
      - flex-start : coloca al inicio
      - flex-end : coloca al final
      - strech : (Default) coloca llenando el 100% de su espacio. `Para funcionar no debe poner un height a la caja hija`
      - space-betwen : coloca una fila arriba la otra abajo y si hay otra en la mitad
      - space-aroud :  Deja un espacio entre arriva y abajo y luego los coloca en el mismo espacio entre las cajas hijas
**Caja Hija FLEX-ITEMS**

Son las cajas flexibles, `y se consideran a los hijos directos del flex-container, pseudoelementos (before y after) y el texto.`
_______________________

    * order : Define un orden

    * CAJA FLEXIBLE ANCHO DE UNA CAJA

      + flex-grow : 'ignora el max-width' y de fine un factor de crecimiento. 
      + flex-shrink: Define un factor de reduccion funciona si el padre `flex-wrap: nowrap;`. 
      + flex-basis: es equivalente a widht
      + flex: resumir las propiedades anteriores
         Ejm. `flex: 1 1 200px`
    
    * align-self: Desplazamiento vertical
      - flex-start : Coloca arriba
      - flex-end : Coloca abajo
      - center : coloca en el centro
      - strech : Calcula el 100% de altura, `siempre y cuando no exista height en la caja hija`.
      - baseline : alinea los textos en las cajas con las otras cajas
### [Display Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/grid)
Modelo de layout que defina columnas y filas
#### Grid Container
`display grid`
  * Definir columnas y filas
    + grid-template-columns: c1 c2 c3 cn 
    + grid-template-rows: r1 r2 r3 rn 
  * grid-gap : espaciado
    + grid-row-gap: espaciado entre las filas
    + grid-column-gap: espaciado entre columnas
  * Cajas flexibles con grid (`fr`)
  * Definir areas 
    + grid-template-areas: "area1 area1 area1"
                            "aside1 main aside"
                            "area2 area2 area2";


#### Grid Item
  * Definir un area
    + grid-row-start : Define en que linea vertical comienza el area
    + grid-row-end : Define  en que linea vertical finaliza el area. tambien se puede usar `span 2` para que el browser calcule 
    + `grid-row`: Shorthand de las anteriores se debe separar los valores con `/`
    + grid-column-start: Define en que linea comienza el area
    + grid-column-end: Define  en que lineaa finaliza el area. tambien se puede usar `span 2` para que el browser calcule 
    + `grid-column`:  Shorthand de las anteriores se debe separar los valores con `/`
  * Usar area configurada
    + grid-area: area1
  
  

### Disenio Adaptativo
1. Viewport
`<meta name='viewport' content='width-device-width, initial-scale=1.0, user-scalable-no, maximum-scale=1.0, minimum-scale=1.0,'/>`

2. Imagenes y videos responsivos
  * width : en porcentaje
  * max-width: crecimiento maximo en pixeles

2. Definir Media Querys
  Puede aplicar estilos para cada tipo de pantalla
  * print : Vista de impresion
  * min-width : Tamanio minimo horizontal
  * max-width : Tamanimo maximo horizontal
  * min-height : Tamanio minimo vertical
  * max-height : Tamanio maximo vertical
  * orientation: Pocicion en la que se encuentra el dispositivo.
  * resolution: Tamanio ocupado por el browser en pixeles
  * color : Detecta si la pantalla en que visualiza el sitio
  * light-level: Densidad de luz del dispositivo
    ```
    //@ media (print/screen/ all) 
    @media print
    {
      img{
        width: 100%;
      }
      h1{
        color: red;
        text-align: center;
      }
    }

    @media all and (min-width: 421px) ans (max-width:780px){
      img{
        wdth:80%
      }
    }
    ```
### Patrones de Disenio
* Tiny Tweak: Sitios demasiados simples se plantes que se disenie en una sola columna.
* Mostly Fluit: Se basa en despositivos pequenios se apila todo en una sola columna
  Ejm:
  ```
    *{
        box-sizing: border-box;
    }
    body{
        background-color: #858585;


    }
    .contenedor{
        background-color:white;
        width: 100%;
        max-width: 800px;
        display: flex;
        flex-wrap: wrap;
        margin: auto;
        padding: 20px;
    }
    .caja1{
        width: 100%;
        background-color: green;
        height: 300px;
    }
    .caja2{
        width: 50%;
        background-color: aqua;
        height: 200px;
    }
    .caja3{
        width: 50%;
        background-color: blue;
        height: 200px;
    }
    @media all and (max-width: 420px) {
        .caja2, .caja3{
            width: 100%;
    }
  ```
 * Column Drop: SImilar a Mostly fluit pero toma en cuenta la importancia para apilar los elementos
 ```
  *{
      box-sizing: border-box;
  }
  body{
      background-color: #858585;


  }
  .contenedor{
      background-color:white;
      width: 100%;
      max-width: 800px;
      display: flex;
      flex-wrap: wrap;
      margin: auto;
      padding: 20px;
      font-size: 20px;
      font-weight: bold;
  }
  .caja1{
      width: 20%;
      background-color: green;
      height: 500px;
  }
  .caja2{
      width: 60%;
      background-color: aqua;
      height: 500px;
  }
  .caja3{
      width: 20%;
      background-color: blue;
      height: 500px;
  }
  @media all and (min-width: 421px) and (max-width: 760px) {
      .caja1{
          width: 30%;
      }
      .caja2{
          width: 70%;
      }
      .caja3{
          width: 100%;
      }
  }
  @media all and (max-width: 420px) {
      .caja1, .caja2, .caja3{
          width: 100%;
      }
      .caja1{
          order: 2;
      }
      .caja2{
          order: 1;
      }
      .caja3{
          order:3;
      }
  }
 ```

 * Layout Shifter: Es el mas complejo, tiene muchos breackpoints

 * off-canvas: Patron mayormente usado en celulares...

### Transformaciones
Efectos que permiten modificar pocision forma o tamanio

  * Transform
    - rotate( deg ) : Rota una caja
      + rotate(xdeg,ydeg): rotacion para 3d
    - scale( x, y) : Modifica el tamanio de una caja en base a x - y
    - translate (x, y): Traslada de pocicion a una caja. 
      Tambien se puede usar translateX - translateY. `No es para pocicionamiento de objetos en la web, se usa para animaciones`
    - skew( deg, deg ) : Deforma la forma dado valores x y

### Transiciones:
  * transition
    - propiedad_css/all segundos velocidad_trancision;
      + velocidada de trancision
        +ease: Inicie lento y en la mita mas rapito y despues lento
        + ease-in: Empienza lento y luego toma velocidad normal
        + ease-out: Empieza a velocidad normal y despues reduce su velocidad.
        + easy-in-out: Empieze lento luego normal y termina lento
        + linear: Con velocidad constante.
  * transition-delay:
    - segundos para activarse;
### Animaciones
**Declaracion**

  * @keyframes nombre_animacion
    -  [from{}]
      + Propiedades css
    - [to{}]
      + Propiedades css
    - [%{}]
      + Propiedades css
  
  **Invocacion**
  * animation-name:
    - nombre_animacion
  * animation-duration
    - segundos
  * animation-iteration-count:
    - infitive: ejecuta la animacion de forma infinita
  * animation-delay:
    - segundos
### Filtro de imagenes
  * filter:
    + blur(px): para desenfocar
    + grayscale(100%): para escala de filtros
    + drop-shadow( x y blur color): para sombras
      - x en px
      - y en px
      - blur
      - color
    + sepia(%): Efecto sepia
    + brightness(%): Para ajustar brillo
    + contrast() Ajustar el contraste
    + hue-rotate(): Incrementa el valor de los colores
    + invert(100%): Invierte la imagen
    + saturate() Ajustar la saturacion
    + opacity(%): Ajusta la opacidad
# SASS
## Buenas Practicas
* Ubicamos variables globales en un solo archivo


## Variables
```
$variable: 5em;
/*Arreglo*/
$list: 1px solid red;
p{
  order: $variable/2;
  border: list;
}
```
*!default:* Sirve para tomar el valor de la variable ya declarada
```
$main-color: #ffc768;

html {
    $main-color: #AD9161 !default;
    background: $main-color;
}

```
*!global:* Sobreescribe una variable locas 
```
$main-color: #ffc768;

html {
    $main-color: #AD9161 !global;
    background: $main-color;
}
div{
  background: $main-color;
}

```
## @at-root
Es util para saltar el anidamiento en css, y compilarlo por fuera. Sirve para crear componentes independientes.
```

html {
    $main-color: #AD9161 !default;
    background: $main-color;
    @at-root div{
      background: $main-color;
    }
}

```
## Tipos de Datos
* Numeros
* String
* Colores
* Null
* List
  * Declaracion
    $lista: hola mundo, que tal;
  * Tomar el valor de una lista
    nth($lista, 1) 
* Maps
  * Declaracion
    ```
    $map: (
      clave1: valor1,
      clave2: valor2
    )
    ```
  * Tomar el valor de un map
     map-get($map, clave1)
  * Iterar un map
    ```
    .social-button{
      @each $clave $valor 
        in $map {
          &.#{$clave} {
            background-color: $color;
          }
        }
     }
    ```
## Operaciones
* Adicion o concatenacion ( + )
* Resta ( - )
* Division ( / ): `Usar interpolacion (#{$val1} / #{val2}) si lo que se requiere es enviar el caracter / en lugar de la division`
* Multiplicacion ( * )
* Modulo ( % )
* Comparacion ( >, <, >=, <=, ==, != )
* Operadores Logicos ( or , and )

## @import "styles.scss";
Util para importar archivos
## extend .bloque
Extiende todas las caracteristicas de un bloque de codigo cerado

## PlaceHolder
```
%placeholder{
  width: 200px;
  height: 200 px;
}
.banner {
 @extend %placeholder;
}
```
## Mixin
```
@mixin primer-mixing($line-height, $font-size, $display: inline-block){
  display: $display;
  line-height: $line-height;
  font-size: $font-size;
  padding: 0 1em;
}
.button {
  @include primer-mixing(3, 1em, inline-block)
  &.small {
    @include primer-mixing(2.5, 0.8em,inline-block)
  }
  &.medium {
    @include primer-mixing(2.5, 0.8em)
  }
  &.very-small {
    @include primer-mixing($line-height: 2.5, font-size: 0.8em)
  }
}
```
`Los argumentos por defecto es recomendable dejarlos al ultimo de los argumentos para que en el momento de incluirles no se envie el argumento`

`Para incluir mixins muy grandes es recomendable enviar argumentos especificado el nombre de los argumentos`
###Mixin con multiples argumentos
```
@mixin multiple($box-shadow...){
  box-shadow: $box-shadow;
}
.box {
  @include multiple(1px solid red, 2 solid blue, 5px solid white, 10px solid green);
}

```
### Media Queries con Mixin

```
@mixin mq($min-width){
  @media screen and (min-width: $min-width) {
    //codigo
    @content;
  }
}

.box {
  color: red;
  @include mq(40em){
    color: green;
  }
   @include mq(60em){
    color: purple;
  }
}

```
### Proporciones
```
@mixing radio( $width, $height ) {
  height: 0;
  overflow: hidden;
  padding-bottom: percentage($h / $w);
  width: 100%
  background: red;
}
.radio {
  @include radio ( 16, 9 )
}
.radio {
  @include radio ( 16, 9 );
  position: relative;
  iframe,
  video,
  object {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
```

## Funciones
Devuelven tipos de datos no bloques
**FUNCIONES CSS**
* rgb: rgba(255, 0, 255  ) 
* calc(): calc(100% - 20%)
* scale(): transform: scale(1.2)
* rotate()
* translate(x, y)
* linear-gradient()  repeting-linear-gradient() 
* radial-gradient() repeting-radial-gradient()
* attr()

**FUNCIONES SASS**
* unquote(): elimina comillas a un string
* quote(): ande comillas al string
* percentage(): convierete un numero a porcentaje
* round(): redondea un numero decimal
* nth($list, $index): obtener un valor de un listado
* map-get($map, $key): obtener un valor de un map especificando su clave
* type-of(): Obtiene el tipo de una variable
* unit() devuelve la unidad de un numero
* unitless() devuelve un boolean, true si no tiene unidad y false si tiene unidad.
**FUNCIONES AVANZADAS SASS**
1. Instropeccion: preguntarse a si mismo
* type-of
* unit()
* unitless()
* inspect(): ver un valor
* varianle-exist(variable)
* function-exist(function)
* mixin-exists(mixinName)
* call(funcion, argumentos)

2. Funciones para strings
* quote()
* unquote()
* str-lenght($string)
* str-index($string, 'subcadema')
* str-insert($string, 'subcadena', $index)
* str-slice($string, $inicio, $final)
* to-upper-case()
* to-lower-case()

3. Funciones numericas
* round(): Redonde dinamico
* percentage()
* floor($numero): Redondear hacia bajo
* ceil($numero): Redondear hacia arriba
* max(1,3,4,5): No reciben listas como parametros
* min(1,2,3,4,5)f
* abs($numero): Valor absoluto
* random([$numero])

4. Funciones de listas
* nth($list, $index)
* lenght($list)
* join($list1, $list2, $list3, [$separador]) el separador puede omitirse o o puede tomar los valores (space/comma)
* append($list, $value, [separador]) Aniade un nuevo elemento
* zip($list1, $list2): Crea una lista multidimensional con las listas pasadas como argumentos


5.  

### Crear funciones
```
// FUNCION PARA SUMAR
@function suma( $a, $b: 10 ) {
  @return $a +@b;
}
.suma {
  width: suma(10em, 2)
}

// FUNCION PARA PARSEAR PX A EM
@function parseEM( $element, $father ) {
  @return ( $element / $father) * 1em;
}
div{
  $fz: 24px;
  font-size: $fz;
  p {
    font-size: em(7px, $fz);
  }
}

// IMAGE PATH
$path: '../assets/img/';
@function imagePath( $img ){
  @return url($path + $img)
}
div {
  background: img('bg.jpg')
}


```



# Angular 4



__________________
**Instalacion** [Angular-Cli](https://cli.angular.io)

```
sudo yarn global add @angular/cli
sudo npm install -g @angular/cli
```

**Crear de un nuevo proyecto**

```
ng new My_New_Project
ng new My_New_Project --style sass --prefix sym --routing
cd My_New_Project
ng set --global packageManager=yarn
```
> -sg: salta la inicializacion de un repositorio git
>
> es buena practica definir un solo prefijo


**Ejecutar un proyecto Angular**

```
cd name_new_proyect
ng serve
```
## ARCHIVOS

### Archivo de configuracion de un modulo `app.module`
1. declarations : seccion donde se especifican los componentes.
2. import : Especificar los modulos que ocupamos
```
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
```
3. providers : Especificamos los servicios

4. bootstrap: Especificamos el componente por defecto por el que vamos a iniciar.

## TIPOS DE DATA BINDING 

### String Interpolation `{{ hello }}`

El flujo de informacion va del TypeScript al HTML

### Property Binding `[property] = "variable"`

El flujo de informacion va del HTML al TypeScript. Utilizado cuando se requiere capturar datos del usuario,

### Event Binding `(event) = "func()"`
El flujo de informacion va del HTML al TypeScript. Utilizado cuando se requiere escucha eventos en el lado del html y se envian al Typescript

### Two Way DataBinding `[(ngModel)] = "variable"` 

Comunicacion bidireccional

## DIRECTIVAS

Son metodos para manipular la informacion  


### COMPONENTES
 Son directivas que siempre tienen asignados templates de HTML.

### ESTRUCTURALES
 Nos permiten modificar el DOM, es decir manipular elementos de HTML.

  **Sintaxis**
  `*`NombreDirectiva_CamelCase

  `<ng-container></ng-container>: Nos ayuda a aplicar mas de una sola directiva a una estructura`

  1. Directiva ngFor
  
   `*ngFor = " let variable of arreglo "`

    Generar n Estructuras similares   

  2. Directiva ngIf
  
  `*ngIf = "var_booleam"`

  3. Directiva ngSwitch
  ```
    *ngSwitch = "variable"
      *ngSwitchCase="valor_para hacer match"
  ```


### ATRIBUTOS
 A estas directivas les indicamos a través de HTML cómo se deben comportar de acuerdo con ciertas condiciones que definimos
 1. Directiva ngClass

 `[ngClass] = "{ clase: condicion }"`
  
  Asigna una clase 

  CSS:
  ```
  .clase{
    background-color: blue;
  }
  ```


 2. Directiva ngStyle
 `[ngStyle]="{color: (condicion) ? white : blue}"`


3. Crear Directivas 

1. Crear Fichero de la directiva
```
import {Directive, OnInit, ElementRef, Renderer2, Input} from 

"@angular/core";
@Directive({
    selector: '[resaltar]' // `usamos la palabra entre corchetes para invocar la drectiva`
})
// `La diretiva va con mayuculas al inicio`
export class ResaltarDirective implements OnInit{
    constructor(private elRef: ElementRef, private renderer: Renderer2){}
    @Input('resaltar') plan : string = '';
    ngOnInit(){
        if(this.plan === 'pagado'){
            this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
            this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
        }
    }
}
```
2. Declarar directiva en archivo app.modules en la seccion declaration

3. [resaltar]= "variable_evaluacion"

### Host Listeners
Estructuras que nos permiten escuchar eventos
1. Crear archivo de directive `contar-clicks.directive.ts`
```
import {Directive, HostListener} from "@angular/core";
@Directive({
    selector: 'a[contar-clicks]'
})
export class ContarClicksDirective{
    clickN = 0;
    @HostListener('click', ['$event.target']) onClick(btn){
        console.log('a', btn, "Número de clicks:", this.clickN++);
    }
}
```

2. Importar en app.module la clase en la secciondeclarations
3. invocamos la directiva en un componente html

### Host Binding
Dar estilos mediante nuestros Host Listeners

```
import {Directive, HostListener, HostBinding} from "@angular/core";
@Directive({
    selector: 'li[contar-clicks]'
})
export class ContarClicksDirective{
    clickN = 0;
    @HostBinding('style.opacity') opacity: number = .1;
    @HostListener('click', ['$event.target']) onClick(btn){
        console.log('a', btn, "Número de clicks:", this.clickN++);
        this.opacity += .1;
    }
}
```
### [INTEGRAR MATERIAL A ANGULAR](https://material.angular.io/guide/getting-started)
1. Instalar dependencias
  ```
  npm install --save @angular/material @angular/cdk
  npm install --save @angular/animations
  ```
  `o`
  ```
  yarn add @angular/material @angular/cdk
  yarn add @angular/animations
  ```

2. Importar en archivo app.module.ts 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
3. Incluir en la seccion de `imports` el componente BrowserAnimationsModule.
4. crear archivo material.module.ts en la carpeta app
```
  import { NgModule } from '@angular/core';
  import { MatButtonModule, MatCheckboxModule } from '@angular/material';

  const modules = [
    MatButtonModule,
    MatCheckboxModule
  ]
  @NgModule({
    imports: modules,
    exports: modules
  })
  export class MaterialModule {}
```
5. Importar en el archivo app module el module `MaterialModule` y en la secion de import

```
import { MaterialModule } from './material.module'
```


6. Incluir el tema. Copiar en el archivo style css la siguiente linea.
`@import "~@angular/material/prebuilt-themes/indigo-pink.css";` 

7. Instalar hammerjs para gestos del celular.

`npm install --save hammerjs` o `yarn add hammerjs`

8. Importar hammerjs en el archivo src/main.ts

`import 'hammerjs';`

9. Copiar en el archivo index.html la linea. [Seleccion de iconos](www.material.io/icons)

`<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`

10. Elejir y copiar [fuentes de texto](https://fonts.google.com) en el header del index.html

`<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,700,700i" rel="stylesheet">`


```
yarn add @angular/material @angular/cdk
yarn add @angular/animations
```


### INTEGRAR BOTSTRAP EN ANGULAR.

1. Intalar bootstrap

`npm install bootstrap`

2. En el archivo angular-cli.json en la seccion de styles agregar el path de bootstrap

`../node_modules/bootstrap/dist/css/bootstrap.min.css` 

### RUTAS

1. Importar Routes y RouterModule de la libreria "@angular/router"

```typescript
import { Routes, RouterModule } from "@angular/router";
```
2. Declarar en app.modules un arreglo constante appRoutes de tipo Routes, con los paths.

```typescript
const appRoutes : Routes = [
  {path: '', component: AppComponent}
  {path: 'places', component: AppPlaces}
]
```

3. Ubicar en el arreglo de metadatos `imports` el componente RouterModule e inicializado con la constante appRoute declarada

```typescript
RouterModule.forRoot(appRoutes)
```

### COMPILAR PARA PRODUCCION

1. Compilar.
  + ng build --prod
2. Instalar http-server
  + yarn global add http-server
3. http-server dist

### CORRER UNIT TEST
1. Compilar.
  + ng test

### CREAR COMPONENTES INTERFACES SERVICES MODULES

+ ng generate component
+ ng generate module nombre_modulo [--module app]
+ ng generate interface
+ ng generate service
 

 ### MULTILENGUAJE
1. install
```
yarn add @ngx-translate/core 
yarn add @ngx-translate/http-loader
```

2. app.module
```
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
```
2. app.module en imports
```
TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
})

```
3. componente
```
import { TranslateService } from '@ngx-translate/core';
constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
}
```
4. Crear una carpeta i38n en assets y despues los archivos json .en .es en los cuales se hubican los idiomas.

en.json
```
{
    "Title": "Test in English {{name}}"
}
```

es.json
```
{
    "Title": "Prueba en espaniol {{name}}"
}
```
5. Template del componente

```
<div>
  {{ 'Title' | translate:userTR }}
</div>
<button (click)="switchLanguage('en')">en</button>

<button (click)="switchLanguage('es')">es</button>
```
> Para considerar los elementros a traducirce, introducimos la variable json hubicados en los archivos de la carpeta i38n seguidos del pipe translate, si se debe enviar un objeto se concidera los dos puntos y el objeto a enviarse al scope del documento json.



### INTEGRAR ANGULAR FLEX
1. Instalar angular flex.

  yarn add @angular/flex-layout

2. Importar el modulo angular flex en el archivo app.module.ts
```ts
import { FlexLayoutModule } from "@angular/flex-layout";



imports: [
    BrowserModule,
    FlexLayoutModule.forRoot()
  ],
```
