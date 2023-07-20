import { useContext } from "react";
import PokemonContext from "../context/PokemonContext";
import ContenedorDeBotones from "./ContenedorDeBotones";
import PokemonCard from "./PokemonCard";
import loader from "../assets/loader.svg"

function Pokeapi() {
    const { pokemons, loading, setLoading } = useContext(PokemonContext)
    return (
        <>
            <h2>Pokedex con React</h2>
            <ContenedorDeBotones />
            <section id="container-pokemons">
                {loading && <img src={loader} />}
                {pokemons && pokemons.map((data) => < PokemonCard key={data.name} name={data.name} setLoading={setLoading} />)}
            </section>
        </ >
    );
}

export default Pokeapi;