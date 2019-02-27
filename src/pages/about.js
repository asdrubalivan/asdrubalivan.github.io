import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import AboutParagraph from '../components/aboutparagraph'
// Images
import LaravelImg from '../images/skills/laravel.svg'
import ReactImg from '../images/skills/react.svg'
import JavascriptImg from '../images/skills/javascript.svg'
import PhpImg from '../images/skills/php.svg'
import NodeImg from '../images/skills/nodejs.svg'

const ImageContainer = styled.section`
  display: flex;
  height: 33rem;
  padding-top: 10rem;
  padding-bottom: 8rem;
  margin-left: 15rem;
  margin-right: 15rem;
  align-items: center;
`

const Img = styled.img`
  &:not(:last-child) {
    margin-right: 5rem;
  }
  max-width: 20rem;
  max-height: 14rem;
`

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
    <ImageContainer>
      <Img src={ReactImg} alt="React" />
      <Img src={JavascriptImg} alt="Javascript" />
      <Img src={NodeImg} alt="NodeJS" />
      <Img src={PhpImg} alt="PHP" />
      <Img src={LaravelImg} alt="Laravel" />
    </ImageContainer>
  </Layout>
)

export default AboutPage
