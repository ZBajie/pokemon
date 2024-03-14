import { useState } from "react"
import Header from "./components/Header/Header"
import Pokemons from "./components/Pokemons/Pokemons"

const App: React.FC = () => {
  const [singlePokemonUrl, setSinglePokemonUrl] = useState<string>("")

  const UpdateSinglePokemonUrl = (newSinglePokemonUrl: string) => {
    setSinglePokemonUrl(newSinglePokemonUrl)
  }
  console.log("app", singlePokemonUrl)
  return (
    <>
      <Header />
      <Pokemons UpdateSinglePokemonUrl={UpdateSinglePokemonUrl} />
    </>
  )
}

export default App
