import { useContext } from "react";
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "../Pages/Home";
import Generation from "../Pages/Generation";
import "../assets/css/styles.css"
import PokemonIndividual from "../Pages/PokemonIndividual";

function Pokeapi() {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:name" element={<Generation />} />
                    <Route path="/:name/:id" element={<PokemonIndividual />} />
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Routes>
            </HashRouter>

        </ >
    );
}

export default Pokeapi;