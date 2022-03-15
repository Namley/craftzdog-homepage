import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {IoLogoTwitter, IoLogoDiscord, IoLogoReddit, IoLogoGoogle} from 'react-icons/io5'
import thumbSNK from '../public/images/links/Attack-on-Titan-season-4-part-2-confirmed-to-premiere.jpg'
import thumbED from '../public/images/links/thumb-1920-1151249.jpg'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a backend developer based in Germany!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Hoai Nam Le
          </Heading>
          <p>Digital Nerd ( Builder / Developer / Gamer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow='hidden'
          >
            <ProfileImage
              src="/images/Nam.png"
              alt="Profile image"
              borderRadius='full'
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Nam is a backend developer based in Hamburg with a passion for building
          websites/services and he likes playing around with the newest technology.
          He often dives into multiple hobbies at the same time, from building keyboards
          to making interesting and funny discord bots. When he is not coding, Nam hangs out in
          the digital playground that is called the online gaming world. He is currently in training
          to become a sofware developer.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Gear
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2003</BioYear>
          Born in Hanoi, Vietnam.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Completed his Mittlere Schulabschluss at Schulzentrum Nord in Pinneberg
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Trained as a software developer for eos.uptrade in Hamburg
        </BioSection>
        <BioSection>
          <BioYear>2019 to present</BioYear>
          On his final year of training and Fachabitur.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
         {' '}
          <Link href="https://myanimelist/profile/namley" target="_blank">
            Anime, Manga
          </Link>
          , Coding, {' '}
          <Link href="https://steamcommunity.com/id/namley" target="_blank">
            Games
          </Link>
          , Building Keyboards, Music
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoDiscord />}
              >
                Namley#1410
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://reddit.com/u/Nam_Ley" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoReddit />}
              >
                u/Nam_Ley
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/namleyy" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @Namleyy
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:lehoainam0106@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGoogle />}
              >
                @lehoainam0106@gmail.com
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://store.steampowered.com/app/1245620/ELDEN_RING/"
            title="Elden Ring"
            thumbnail={thumbED}
          >
            Currently playing
          </GridItem>
          <GridItem
            href="https://myanimelist.net/anime/48583/Shingeki_no_Kyojin__The_Final_Season_Part_2"
            title="Attack On Titan"
            thumbnail={thumbSNK}
          >
            Currently watching
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
