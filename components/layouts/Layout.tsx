import { FC, ReactNode } from "react"
import Head from "next/head"
import { NavBar } from "../ui"


interface LayoutProps {
    title?: string,
    children: ReactNode
}


export const Layout : FC<LayoutProps> = ({children, title}) => {
  return (
    <>
        <Head>
            <title>{title || 'Pokemon APP'}</title>
            <meta name="author" content="Julian Martinez" />
            <meta name="description" content="Informacion sobre el pokemon X" />
            <meta name="keywords" content="pokemon, pokedex, informacion, informacion sobre el pokemon x" />
        </Head>

        <NavBar />
        <main
            style={{
              padding: "0x 20px",
            }}
        >
            {children}
        </main>
    </>
  )
}