import { useEffect, useState } from "react";
import ContenedorTipos from "./ContenedorTipos";

function PokemonCard({ name, setLoading }) {
    const [infoPokemon, setInfoPokemon] = useState("")
    const [mainType, setMainType] = useState("")
    useEffect(() => {
        setLoading(true)
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`
        fetch(url)
            .then(res => res.json())
            .then(json => {
                setInfoPokemon(json)
                json.types.map((type, index) => { index === 0 && setMainType(type.type.name) })
            })
            .catch(error => {
                let respuesta = `${error.status} ` + error.statusText || "Ha ocurrido un error"
                console.log(respuesta.results)
            })
        setLoading(false)
    }, [infoPokemon])
    return (
        <div id="card" className={mainType && mainType}>
            <span>{infoPokemon.id && infoPokemon.id}</span>
            <img src={infoPokemon && infoPokemon.sprites.front_default ? infoPokemon.sprites.front_default : ""} alt={infoPokemon.name} />
            <h1>{infoPokemon.name}</h1>
            <ContenedorTipos types={infoPokemon.types} />
        </div>);
}

export default PokemonCard;