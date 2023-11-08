# <img style="padding-right:0.5rem" src='https://img.freepik.com/vector-premium/bandera-argentina-bandera-argentina-ilustracion-vectorial_685751-66.jpg' width="50px" >  <span style="font-size:3rem">ESPAÑOL:</span> 

## <i align="center" style="font-size:2rem">🐇 POKEDEX HECHA EN   _REACT_</i>

En este proyecto se utilizaron hooks como **useState,useEffect,useContext** y tecnologias como **HTML,CSS,Javascript,React, Sass**
Nota: Para el manejo de rutas se añadio, React-Router .

_Este proyecto se realizo con el proposito de practicar React_

<p align="center">
 <img src="src/assets/squirtle.gif" alt="Squirtle">
</p>

## 💡 Como se pensó este proyecto y como funciona

**_Idea Princiapl : Una Pokedex en donde los pokemones esten categorizados por generaciones o regiones_**

La api que se utilizo: [Pokeapi](https://pokeapi.co/api/v2/)

Primero que nada, Ya habia realizado una pokedex pero la habia realizado en Vanilla JavaScript por lo tanto la idea principal era re crearla en React

Mi idea fue a traves de diferentes botones representar las diferentes generaciones de pokemones . Cuando el usuario haga click en alguno de estos botones , todos los pokemones de la generacion seleccionada/elegida se mostraran en la pantalla

Por lo tanto , para el primer desafio de la app, cree el contenedor que almacenara todos los botones. Inicialmente planeaba crear todos los botones manualmente , pero buscando en la API encontre una forma para simplificar este proceso . Decidi usar una peticion fetch a la API con el endpoint _generation_ (https://pokeapi.co/api/v2/generation)

Despues de esto , Necesitaba implementar la logica para los botones (Cuando los usuarios hicieran click en un boton , la generacion correspondiente de pokemons apareciera en pantalla)

Cree un contexto con 2 estados , uno llamado **_"generation"_** y otro **_"pokemons"_**. El primer estado almacena la generacion que el usuario desea conocer, cuando se hace click en un boton se almacena la url de esa generacion. Tambien poseo un efecto que posee de dependencia "generation" por lo tanto cada vez que el usuario realiza click y cambia ese estado , se realiza la correspondiente peticion para poder poseer la ultima generacion que se desea conocer sus pokemones.

La app posee un renderizado condicional . Cuando el estado "pokemones" posee algo , se renderizan los diferentes pokemones.

Basicamente eso es la aplicacion pero no me gustaba la informacion individual con la que venia cada pokemon. Por lo tanto en el componente "PokemonCard" decidi crear un estado llamdo "infoPokemon". Este estado almacena informacion que considero mas relevante y se obtiene de otra peticion . Esta peticion se realiza utilizando el nombre del pokemon (https://pokeapi.co/api/v2/pokemon/name)

Para los estilos , decidí usar SASS. Lo siento muy comodo y agil para desarrollar los estilos en él 


----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
# <img style="padding-right:0.5rem" src="https://img.freepik.com/vector-premium/gran-bretana-bandera-bandera-inglaterra-vector-icono-reino-unido-bandera-gran-bretana-10-eps_800531-104.jpg" width="50px"> <span style="font-size:3rem">ENGLISH:</span>


## <i align="center" style="font-size:2rem">⭐ POKEDEX MADE IN  _REACT_</i>

In this proyect was used hooks like **useState,useEffect,useContext** and technologies like **HTML,CSS,Javascript,React, Sass**
Note: I added for routes managment, React-Router .

_This proyect was built with the purpose of practising React_

<p align="center">
 <img src="src/assets/pikachu-pokemon.gif" alt="Pikachu App">
</p>

## 🤔 How i thought about the project and its functioning

**_Main Idea : Pokedex where the pokemons was categorized  by generations or Regions_**

The Api used was :[Pokeapi](https://pokeapi.co/api/v2/)

First of all , I made other Pokedex but it was made in Vanilla JavaScript .So I got the main idea ,and I tried to do  it in React 

My idea was  to have a different buttons representing  different generation of Pokemons .When the user clicks on one of these buttons  ,all the Pokemons from  the selected  generation will be displayed.

 So ,for the first  trial ,I created  a container with all these buttons.Initially, I was planning to create all the buttons manually, but while searching in the API, I discovered a way to simplify this process .I decided to use a fetch to the API with the endpoint _generation_(https://pokeapi.co/api/v2/generation)

 After this ,I needed to implement  the logic for the buttons (so that when you click on a button,the corresponding generation of pokemons appears)
 

I created a context whith two states, one called "generation" and the other called "pokemons".The "generation" state stores the generation the user wants to know about. So when the user clicks ,using useContenxt, store the url of the selected  generation in the "generation" state. Inside the useEffect ,I have  a list of dependencies ,including the variable "generation".Each time  the user clicks , useEffect performs the fetch to retrieve  the corresponding Pokemons


 My app has a condicional render .When the "pokemons" state has any, the "Pokemons" component renders


Basically that is all the app but i dont like the individual information of each pokemon. So ,in the "PokemonCard" component ,I decided to create an "infoPokemon" state. This state stores more comprehensive information obtained from another fetch.The fetch is done using just the Pokemon name(https://pokeapi.co/api/v2/pokemon/name)


For the styles , I decided to use SASS. I feel more confortable to develop. I thougth in Styled Components but it tecnology i dont have so much practise it

