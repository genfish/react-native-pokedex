import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { getPokemonsFavoriteApi } from '../api/favorite';
import { getPokemonDetailsApi } from '../api/pokemon';

import useAuth from '../hooks/useAuth';

import PokemonList from '../components/PokemonList';
import NoLogged from '../components/NoLogged';

export default function Favorite() {

  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonsFavoriteApi();

          const pokemonsArray = await Promise.all(
            response.map(async (id) => {
              const pokemonDetails = await getPokemonDetailsApi(id);
    
              return {
                id: pokemonDetails.id,
                name: pokemonDetails.name,
                types: [
                  pokemonDetails.types[0].type.name,
                  pokemonDetails.types.length > 1 ? pokemonDetails.types[1].type.name : null
                ],
                order: pokemonDetails.order,
                image: pokemonDetails.sprites.other["official-artwork"].front_default,
              };
            })
          );

          setPokemons(pokemonsArray);
        })();
      }
    }, [auth])
  );

  return !auth ? <NoLogged /> : <PokemonList pokemons={pokemons} />;
}
