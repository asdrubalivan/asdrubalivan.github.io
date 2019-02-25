import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import AboutParagraph from '../components/aboutparagraph'

const AboutPage = () => (
  <Layout showMainLogo={false} blueBackground={false}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <AboutParagraph title={'Something about me'}>
      Et, egestas quis ipsum suspendisse ultrices gravida! Nam libero justo
      laoreet sit amet cursus sit amet
    </AboutParagraph>
    <AboutParagraph title={'Skills'}>
      Et, egestas quis ipsum suspendisse ultrices gravida! Nam libero justo
      laoreet sit amet cursus sit amet
    </AboutParagraph>
  </Layout>
)

export default AboutPage
