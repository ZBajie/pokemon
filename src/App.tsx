import { useState } from "react"
import Header from "./components/Header/Header"
import Pokemons from "./components/Pokemons/Pokemons"
import Pokemon from "./components/Pokemon/Pokemon"

const App: React.FC = () => {
  const [singlePokemonUrl, setSinglePokemonUrl] = useState<string>(
    "https://pokeapi.co/api/v2/pokemon/1/"
  )

  const UpdateSinglePokemonUrl = (newSinglePokemonUrl: string) => {
    setSinglePokemonUrl(newSinglePokemonUrl)
  }
  return (
    <>
      <Header />
      <div className="app-div">
        <Pokemon pokemonUrl={singlePokemonUrl} />
        <Pokemons UpdateSinglePokemonUrl={UpdateSinglePokemonUrl} />
      </div>
    </>
  )
}

export default App
