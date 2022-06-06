import { Grid, Card } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React, { FC } from 'react'


interface Props {
    id: number;
}

export const FavCard : FC<Props> = ({id}) => {

  const router = useRouter();

  const handleClick = () => {
    router.push(`/pokemon/${id}`);
  }

  return (
    <Grid key={id} xs={6} sm={3} md={2} xl={1} onClick={handleClick}>
      <Card hoverable clickable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt={`Pokemon ${id}`}
          width={'100%'}
          height={140}
        />
      </Card>
    </Grid>
  );
}
