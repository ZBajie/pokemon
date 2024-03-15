import { useRef } from "react"

type UpdateSinglePokemonUrlProps = {
  UpdateSinglePokemonUrl: (newSinglePokemonUrl: string) => void
}

const PokemonSearch: React.FC<UpdateSinglePokemonUrlProps> = ({
  UpdateSinglePokemonUrl,
}) => {
  const searchName = useRef<HTMLInputElement>(null)
  const onClick = () => {
    if (searchName.current) {
      console.log(searchName.current.value)
      const url = `https://pokeapi.co/api/v2/pokemon/${searchName.current.value.toLowerCase()}/`
      UpdateSinglePokemonUrl(url)
      searchName.current.value = ""
      searchName.current.focus()
    }
  }
  return (
    <section className="pokemon-search">
      <h2>Search Pokemon</h2>
      <input type="text" placeholder="Full name needed" ref={searchName} />
      <button onClick={onClick}>Search</button>
    </section>
  )
}

export default PokemonSearch
