# Pokedex maded  in _React_

In this proyect was used hooks like **useState,useEffect,useContext** and technologies like **HTML,CSS,Javascript,React, Sass**
Note: I added for routes managment, React-Router .

_This proyect was built with the purpose of practising React_

<p align="center">
 <img src="./pokedex/src/assets/pikachu-pokemon.gif" alt="Pikachu App">
</p>

## How i thought about the project and its functioning

**_Main Idea : Pokedex where the pokemons was categorized  by generations or Regions_**

First of all , I made other Pokedex but it was made in Vanilla JavaScript .So I got the main idea ,and I tried to do  it in React 

My idea was  to have a different buttons representing  different generation of Pokemons .When the user clicks on one of these buttons  ,all the Pokemons from  the selected  generation will be displayed.

 So ,for the first  trial ,I created  a container with all these buttons.Initially, I was planning to create all the buttons manually, but while searching in the API, I discovered a way to simplify this process .I decided to use a fetch to the API with the endpoint _generation_(https://pokeapi.co/api/v2/generation)

 After this ,I needed to implement  the logic for the buttons (so that when you click on a button,the corresponding generation of pokemons appears)
 

I created a context whith two states, one called "generation" and the other called "pokemons".The "generation" state stores the generation the user wants to know about. So when the user clicks ,using useContenxt, store the url of the selected  generation in the "generation" state. Inside the useEffect ,I have  a list of dependencies ,including the variable "generation".Each time  the user clicks , useEffect performs the fetch to retrieve  the corresponding Pokemons


 My app has a condicional render .When the "pokemons" state has any, the "Pokemons" component renders


Basically that is all the app but i dont like the individual information of each pokemon. So ,in the "PokemonCard" component ,I decided to create an "infoPokemon" state. This state stores more comprehensive information obtained from another fetch.The fetch is done using just the Pokemon name(https://pokeapi.co/api/v2/pokemon/name)


For the styles , I decided to use SASS. I feel more confortable to develop. I thougth in Styled Components but it tecnology i dont have so much practise it

