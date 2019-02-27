import React from 'react'
import styled from 'styled-components'
import { H2, P } from './tags'

const Title = styled(H2)`
  margin-top: 8rem;
  margin-bottom: 5rem;
`

const Text = styled(P)`
  text-align: center;
`

const AboutParagraph = ({ children, title }) => (
  <>
    <Title>{title}</Title>
    <Text>{children}</Text>
  </>
)

export default AboutParagraph
