import { Card, Grid, Row, Text } from '@nextui-org/react';
import React from 'react';
import { SmallPokemon } from '../../interfaces';
import { FC } from 'react';
import { useRouter } from 'next/router';

interface Props {
  pokemon: SmallPokemon;
}

export const CardPoke: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  return (
    <Grid
      xs={6}
      sm={4}
      md={3}
      xl={2}
      key={pokemon.id}
      onClick={() => router.push(`/name/${pokemon.name}`)}
    >
      <Card hoverable clickable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={pokemon.img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
