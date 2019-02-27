import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { H2 } from '../components/tags'
import UnderConstruction from '../images/under_construction.svg'

const SectionBlog = styled.section`
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

const BlogPage = () => (
  <Layout blueBackground>
    <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
    <SectionBlog>
      <H2 blueBackground>Blog</H2>
      <Img alt="Under construction" src={UnderConstruction} />
    </SectionBlog>
  </Layout>
)

export default BlogPage
