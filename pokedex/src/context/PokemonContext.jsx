import { createContext, useEffect, useState } from "react";

const PokemonContext = createContext()
const PokemonProvider = ({ children }) => {
    const [generation, setGeneration] = useState("")
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(false)
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
    const data = { generation, setGeneration, pokemons, setLoading, loading }
    return (
        <PokemonContext.Provider value={data}>{children}</PokemonContext.Provider>
    )
}

export { PokemonProvider }
export default PokemonContext