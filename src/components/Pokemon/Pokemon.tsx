import { useEffect, useState } from "react"
import { Root } from "./pokemonInterface"

type PokemonProps = {
  pokemonUrl: string
  UpdateImageUrl: (newImageUrl: string) => void
}

const Pokemon: React.FC<PokemonProps> = ({ pokemonUrl, UpdateImageUrl }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [errorBox, setErrorBox] = useState(false)
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
          setPokemon(data)
          setFrontImage(data.sprites.front_default)
          setBackImage(data.sprites.back_default)
          UpdateImageUrl(data.sprites.front_default)
        }
      } catch (err) {
        if (isMounted) {
          setErrorBox(true)
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
  }, [pokemonUrl, UpdateImageUrl])

  return (
    <div className="pokemon-card">
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <>
          <h2>{pokemon.name}</h2>
          <ul>
            <li>Heigth: {pokemon.height}</li>
            <li>Weigth: {pokemon.weight}</li>
          </ul>
          <div>
            <img src={frontImage} alt="Pokemon" />
            <img src={backImage} alt="Pokemon" />
          </div>
        </>
      )}
      {errorBox && (
        <>
          <div className="error-box-background"></div>
          <div className="error-box">
            <button
              onClick={() => {
                setErrorBox(false)
              }}
            >
              Close
            </button>
            <p>Search failed</p>
          </div>
        </>
      )}
    </div>
  )
}

export default Pokemon
