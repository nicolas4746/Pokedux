import { SET_POKEMONS, SET_LOADING } from './types';
import {getPokemonDetails} from '../api';

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const setLoading = (siestacargandoono) => ({
  type: SET_LOADING,
  siestacargandoono,
})

export const getPokemonsWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const pokemonsDetailed = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetails(pokemon))
    );

    dispatch(setPokemons(pokemonsDetailed));
  };