import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbMonitor from '../public/images/contents/aoc24g2.jpg'
import thumbKeyboard from '../public/images/contents/keyboard.jpg'
import thumbMouse from '../public/images/contents/zowie.jpg'
import thumbHeadphones from '../public/images/contents/Sennheiser_HD600.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Gear
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="" title="Monitor" thumbnail={thumbMonitor}>
            Current Monitor: AOC 24G2
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id=""
            title="Keyboard"
            thumbnail={thumbKeyboard}
          >
            Current Keyboard: Space65 with GMK Olivia
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id=""
            title="Mouse"
            thumbnail={thumbMouse}
          >
            Current Mouse: Zowie FK2
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="" thumbnail={thumbHeadphones} title="Headphones">
            Current Headphones: Sennheiser HD600
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
