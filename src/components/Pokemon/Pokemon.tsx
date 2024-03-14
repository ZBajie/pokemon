import { useEffect, useState } from "react"
import { Root } from "./pokemonInterface"

type PokemonProps = {
  pokemonUrl: string
}

const Pokemon: React.FC<PokemonProps> = ({ pokemonUrl }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [pokemon, setPokemon] = useState({} as Root)
  const [frontImage, setFrontImage] = useState("")
  const [backImage, setBackImage] = useState("")

  useEffect(() => {
    let isMounted = true
    const getPokemonData = async () => {
      try {
        setIsLoading(true)
        const result = await fetch(pokemonUrl)
        const data = await result.json()
        if (isMounted) {
          console.log(data)
          setPokemon(data)
          setFrontImage(data.sprites.front_default)
          setBackImage(data.sprites.back_default)
        }
      } catch (err) {
        if (isMounted) {
          console.log(err)
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }
    getPokemonData()
    return () => {
      isMounted = false
    }
  }, [pokemonUrl])

  return (
    <div className="pokemon-card">
      <h2>{pokemon.name}</h2>
      <ul>
        <li>Heigth: {pokemon.height}</li>
        <li>Weigth: {pokemon.weight}</li>
      </ul>
      <div>
        <img src={frontImage} alt="" />
        <img src={backImage} alt="" />
      </div>
    </div>
  )
}

export default Pokemon
