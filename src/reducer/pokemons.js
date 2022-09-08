import { SET_POKEMONS, SET_FAVORITE} from '../actions/types';
import { fromJS, setIn, getIn} from 'immutable';

const initialState = fromJS({
  pokemons: [],
});

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      //return { ...state, pokemons: action.payload }; (sin usar immutable)
      //return state.setIn(['pokemons'], fromJS(action.payload)) usando immutable version4.0 profe
      return setIn(state, ['pokemons'], fromJS(action.payload)) //immutable 4.1
    case SET_FAVORITE:
      const currentPokemonIndex = state.get('pokemons').findIndex((pokemon) => {
        return pokemon.get('id') === action.payload.pokemonId;
      });

      if (currentPokemonIndex < 0) {
        return state;
      }

      /* const isFavorite = state.get('pokemons').get(currentPokemonIndex).get('favorite') */
      const isFavorite = state.getIn(['pokemons', currentPokemonIndex, 'favorite']);

      return state.setIn(['pokemons', currentPokemonIndex, 'favorite'], !isFavorite);
    default:
      return state;
  }
};