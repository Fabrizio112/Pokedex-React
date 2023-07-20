import "./assets/css/styles.css"
import Pokeapi from './Components/Pokeapi'
import { PokemonProvider } from './context/PokemonContext'

function App() {

  return (
    <PokemonProvider>
      <Pokeapi />
    </PokemonProvider>
  )
}

export default App
