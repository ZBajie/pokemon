type ImageUrlProps = {
  imageUrl: string
}

const Header: React.FC<ImageUrlProps> = ({ imageUrl }) => {
  return (
    <header className="header-main">
      <img src={imageUrl} alt="" />
      <h1>Pokemon</h1>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
        alt=""
      />
    </header>
  )
}

export default Header
