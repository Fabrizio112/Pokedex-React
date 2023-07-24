import { createContext, useEffect, useState } from "react";

const PokemonContext = createContext()
const PokemonProvider = ({ children }) => {
    const [generation, setGeneration] = useState("") //Este estado permite obtener que Generacion es la que el usuario selecciono

    const [pokemons, setPokemons] = useState([])//Este estado permite obtener los pokemones de la generacion seleccionada por el usuario

    const [pokemonIndividual, setPokemonIndividual] = useState([])//Es del "view More".Se obtiene toda la informacion del pokemon seleccionado

    const [loading, setLoading] = useState(false)//Es el estado que permite cargar el loader

    const [mainContainer, setMainContainer] = useState("") //Este estado es para poder obtener el nombre de clase de la Card del pokemon y poder agregarsela al contenedor con mas informacion
    useEffect(() => {
        fetch(generation)
            .then(response => response.json())
            .then(json => {
                setPokemons(json.pokemon_species)
            })
            .catch((error) => {
                let respuesta = `${error.status} ` + error.statusText || "Ha ocurrido un error"
            })
    }, [generation])
    const data = { generation, setGeneration, pokemons, setLoading, loading, pokemonIndividual, setPokemonIndividual, mainContainer, setMainContainer }
    return (
        <PokemonContext.Provider value={data}>{children}</PokemonContext.Provider>
    )
}

export { PokemonProvider }
export default PokemonContext