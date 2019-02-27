import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { H2 } from '../components/tags'
import UnderConstruction from '../images/under_construction.svg'

const SectionWorks = styled.section`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Img = styled.img`
  margin-top: 5rem;
  width: 33vw;
  transform
`

const WorksPage = () => (
  <Layout blueBackground>
    <SEO title="Works" keywords={[`gatsby`, `application`, `react`]} />
    <SectionWorks>
      <H2 blueBackground>Works</H2>
      <Img alt="Under construction" src={UnderConstruction} />
    </SectionWorks>
  </Layout>
)

export default WorksPage
