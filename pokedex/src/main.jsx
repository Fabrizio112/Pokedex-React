import React from 'react'
import ReactDOM from 'react-dom/client'
import { PokemonProvider } from './context/PokemonContext.jsx'
import Pokeapi from './Components/Pokeapi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonProvider>
      <Pokeapi />
    </PokemonProvider>
  </React.StrictMode>,
)
