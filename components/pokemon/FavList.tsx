import { Card, Grid } from '@nextui-org/react';
import React, { FC } from 'react'
import { FavCard } from './FavCard';

interface Props {
    favorites: number[];
}

export const FavList : FC<Props>  = ({favorites}) => {
  return (
    <Grid.Container gap={2} direction="row" justify="center">
      {favorites.map((id) => (
        <FavCard key={id} id={id} />
      ))}
    </Grid.Container>
  );
}
