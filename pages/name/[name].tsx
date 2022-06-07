import React, { useState } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { Layout } from '../../components/layouts';
import { pokeApi } from '../../api';
import { Pokemon, PokemonListResponse } from '../../interfaces';
import { getPokemonInfo, localFavorites } from '../../utils';
import confetti from 'canvas-confetti';

interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {


  const [isFavorite, setIsFavorite] = useState(
    localFavorites.isInFavorites(pokemon.id)
  );

  const onToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    localFavorites.toggleFavorite(pokemon.id);

    if (!isFavorite) {
      confetti({
        particleCount: 100,
        angle: 90,
        spread: 360,
        origin: { x: 1, y: 0 },
      });
    }
  };

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  '/no-image.png'
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{
                display: 'flex',
                flexDirection: 'column',
                '@sm': {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                },
              }}
            >
              <Text transform="capitalize" h1>
                {pokemon.name}
              </Text>
              <Button
                flat
                color={isFavorite ? 'error' : 'success'}
                auto
                onClick={onToggleFavorite}
              >
                {isFavorite ? 'Quitar de favoritos' : 'Guardar en favoritos'}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container display="flex" direction="row">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  const pokemonsByName: string[] = data.results.map(
    (poke: { name: string; url: string }) => poke.name
  );

  return {
    paths:  pokemonsByName.map(pokemon => ({ params: { name: pokemon } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  return {
    props: {
      pokemon :await getPokemonInfo(name)
    },
  };
};

export default PokemonByNamePage;
