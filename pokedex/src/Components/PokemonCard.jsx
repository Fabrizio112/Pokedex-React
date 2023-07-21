import { useEffect, useState } from "react";
import ContenedorTipos from "./ContenedorTipos";
import { Link } from "react-router-dom"
function PokemonCard({ name, setLoading, setPokemonIndividual, setMainContainer }) {

    const [infoPokemon, setInfoPokemon] = useState("")//Este estado permite obtener toda la informacion del pokemon

    const [mainType, setMainType] = useState("")//Este estado permite obtener el tipo principal del pokemon para poder luego colorear la UI

    useEffect(() => {
        setLoading(true)
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`
        fetch(url)
            .then(res => res.json())
            .then(json => {
                setInfoPokemon(json)
                json.types.map((type, index) => { index === 0 && setMainType(type.type.name) })
                setLoading(false)
            })
            .catch(error => {
                let respuesta = `${error.status} ` + error.statusText || "Ha ocurrido un error"
                console.log(respuesta.results)
            })

    }, [infoPokemon])

    const handleClick = (e) => {
        setMainContainer(e.target.parentElement.className)
        setPokemonIndividual(infoPokemon)
    }

    return (
        <div id="card" className={mainType && mainType}>
            <span>{infoPokemon.id && infoPokemon.id}</span>
            <img src={infoPokemon && infoPokemon.sprites.front_default && infoPokemon.sprites.front_default} alt={infoPokemon.name} />
            <h1>{infoPokemon.name}</h1>
            <ContenedorTipos types={infoPokemon.types} />
            <Link onClick={handleClick} to={`${infoPokemon.id}`} >View More</Link>
        </div>);
}

export default PokemonCard;