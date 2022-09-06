import PokemonCard from './PokemonCard';
import './PokemosList.css'
const PokemonList = ({ pokemons }) => {
  return (
    <div className='PokemonList'>
      {pokemons.map((pokemon) => {
        return <PokemonCard />;
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
};

export default PokemonList;