import { useState } from "react"
import Header from "./components/Header/Header"
import Pokemons from "./components/Pokemons/Pokemons"
import Pokemon from "./components/Pokemon/Pokemon"
import PokemonSearch from "./components/PokemonSearch/PokemonSearch"

const App: React.FC = () => {
  const [singlePokemonUrl, setSinglePokemonUrl] = useState<string>(
    "https://pokeapi.co/api/v2/pokemon/1/"
  )

  const UpdateSinglePokemonUrl = (newSinglePokemonUrl: string) => {
    setSinglePokemonUrl(newSinglePokemonUrl)
  }

  const [imageUrl, setImageUrl] = useState<string>(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
  )

  const UpdateImageUrl = (newImageUrl: string) => {
    setImageUrl(newImageUrl)
  }
  return (
    <>
      <Header imageUrl={imageUrl} />
      <div className="app-div">
        <div>
          <Pokemon
            pokemonUrl={singlePokemonUrl}
            UpdateImageUrl={UpdateImageUrl}
          />
          <PokemonSearch UpdateSinglePokemonUrl={UpdateSinglePokemonUrl} />
        </div>
        <Pokemons UpdateSinglePokemonUrl={UpdateSinglePokemonUrl} />
      </div>
    </>
  )
}

export default App
