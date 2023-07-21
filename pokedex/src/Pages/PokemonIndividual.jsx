import { useContext, } from "react";
import PokemonContext from "../context/PokemonContext";
import { useNavigate } from "react-router-dom"

function PokemonIndividual() {
    const { pokemonIndividual, mainContainer } = useContext(PokemonContext)
    let navigate = useNavigate()
    return (
        <>

            {pokemonIndividual.length != 0 ?
                <>
                    <button onClick={() => navigate(-1)} className="back">Back</button>
                    <section id="pokemon-individual" className={`${mainContainer && mainContainer}`} >

                        <h1>#{pokemonIndividual.id} {pokemonIndividual.name}</h1>

                        <aside id="container-pokemon">
                            <div id="img-pokemon">
                                <img src={pokemonIndividual.sprites.other["official-artwork"].front_default} alt={pokemonIndividual.name} />
                            </div>
                            <div id="info-pokemon">
                                <p>Weight :{pokemonIndividual.weight / 10} kg</p>
                                <p>Height:{pokemonIndividual.height / 10} mts.</p>
                                <ul>
                                    <span>Main Habilities:</span>
                                    {pokemonIndividual.abilities.map((el) => <li>-{(el.ability.name).replace("-", " ")}</li>)}
                                </ul>
                                {pokemonIndividual.types && pokemonIndividual.types.map((type) => <button className={type.type.name} id="btn-type" >{type.type.name}</button>)}
                            </div>
                        </aside>

                    </section>
                </>
                :
                <>

                    <button onClick={() => navigate("/")} className="back">Back</button>
                    <div className="error">
                        <h3>Unexpected error ,Please go to the generation selector</h3>
                    </div>
                </>
            }

        </>);
}

export default PokemonIndividual;