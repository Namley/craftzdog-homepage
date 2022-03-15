import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Hoai Nam Le's homepage" />
        <meta name="author" content="Hoai Nam Le" />
        <meta name="author" content="Namley" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@namleyy" />
        <meta name="twitter:creator" content="@namleyy" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Hoai Nam Le's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Hoai Nam Le - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
      

        {children}

      </Container>
    </Box>
  )
}

export default Main
