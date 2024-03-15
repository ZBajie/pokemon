import { useEffect, useState } from "react"

export type Root = {
  count: number
  next: string
  previous: string
  results: Result[]
}

export type Result = {
  name: string
  url: string
}

type UpdateSinglePokemonUrlProps = {
  UpdateSinglePokemonUrl: (newSinglePokemonUrl: string) => void
}

const Pokemons: React.FC<UpdateSinglePokemonUrlProps> = ({
  UpdateSinglePokemonUrl,
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [pokemonsUrl, setPokemonsUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  )
  const [pokemons, setPokemons] = useState({} as Root)

  useEffect(() => {
    let isMounted = true
    const getPokemons = async () => {
      try {
        setIsLoading(true)
        const result = await fetch(pokemonsUrl)
        const data = await result.json()
        if (isMounted) {
          console.log(data)
          setPokemons(data)
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
    getPokemons()
    return () => {
      isMounted = false
    }
  }, [pokemonsUrl])

  return (
    <section className="pokemons">
      <h2>Pokemons</h2>
      <ul>
        {isLoading ? (
          <li>Loading...</li>
        ) : (
          pokemons.results &&
          pokemons.results.map((item, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  UpdateSinglePokemonUrl(item.url)
                }}
              >
                {item.name}
              </li>
            )
          })
        )}
      </ul>
      <div className="buttons">
        <button
          onClick={() => {
            setPokemonsUrl(pokemons.previous)
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            setPokemonsUrl(pokemons.next)
          }}
        >
          Next
        </button>
      </div>
    </section>
  )
}

export default Pokemons
