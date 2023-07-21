import { useContext } from "react";
import PokemonContext from "../context/PokemonContext";
import PokemonCard from "../Components/PokemonCard";
import { useNavigate } from "react-router-dom"

function Generation() {
    const { pokemons, loading, setLoading, setPokemonIndividual } = useContext(PokemonContext)
    let navigate = useNavigate()
    return (
        <>
            <button onClick={() => navigate("/")} className="back">Back Home</button>
            {pokemons.length != 0 ? <section id="container-pokemons">
                {loading && <img src={loader} />}
                {pokemons && pokemons.map((data) => < PokemonCard key={data.name} name={data.name} setLoading={setLoading} setPokemonIndividual={setPokemonIndividual} />)}
            </section> :
                <div className="error">
                    <h3>Unexpected error , Please go to the generation selector</h3>
                </div>
            }

        </>
    );
}

export default Generation;