import { FC, ReactNode } from "react"
import Head from "next/head"
import { NavBar } from "../ui"


interface LayoutProps {
    title?: string,
    children: ReactNode
}

const origin = (typeof window === "undefined") ? "" : window.location.origin


export const Layout : FC<LayoutProps> = ({children, title}) => {


  return (
    <>
      <Head>
        <title>{title || 'Pokemon APP'}</title>
        <meta name="author" content="Julian Martinez" />
        <meta name="description" content="Informacion sobre el pokemon X" />
        <meta
          name="keywords"
          content="pokemon, pokedex, informacion, informacion sobre el pokemon x"
        />
        <meta
          property="og:title"
          content={`Información sobre el pokemon ${title}`}
        />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre ${title}`}
        />
        <meta
          property="og:image"
          content={`${origin}/banner.png`}
        />
      </Head>

      <NavBar />
      <main
        style={{
          padding: '0x 20px',
        }}
      >
        {children}
      </main>
    </>
  );
}