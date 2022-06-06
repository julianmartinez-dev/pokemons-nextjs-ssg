import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import { FavList } from '../../components/pokemon';
import { localFavorites } from '../../utils';
import { Text } from '@nextui-org/react';


const FavPage = () => {

   const [favorites, setFavorites] = useState<number[]>([]);

   useEffect(() => {
     setFavorites(localFavorites.pokemons());
   }, []);

   
  return (
    <Layout title="Pokemons - Favoritos">
      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <>
          <Text h1 css={{
            marginBottom: 20,
            textAlign: 'center',
          }}>Listado de favoritos</Text>
          <FavList favorites={favorites} />
        </>
      )}
    </Layout>
  );
}

export default FavPage;