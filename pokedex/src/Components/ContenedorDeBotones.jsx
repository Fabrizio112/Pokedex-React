import { useContext, useEffect, useState } from "react";
import BotonGeneraciones from "./BotonGeneraciones";
import PokemonContext from "../context/PokemonContext";


function ContenedorDeBotones() {
    const [generations, setGenerations] = useState([])
    const { setGeneration } = useContext(PokemonContext)
    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/generation"
        const pedirPokemones = (url) => {
            fetch(url)
                .then(res => res.json())
                .then(json => {
                    setGenerations(
                        ...generations,
                        json.results
                    )
                })
                .catch(error => {
                    let respuesta = `${error.status} ` + error.statusText || "Ha ocurrido un error"
                    console.log(respuesta.results)
                })
        }
        pedirPokemones(url)

    }, [])
    return (
        <section id="container-buttons">
            {generations && generations.map((data, index) => <BotonGeneraciones setGeneration={setGeneration} key={index} name={data.name} url={data.url} />)}
        </section>
    );
}

export default ContenedorDeBotones;