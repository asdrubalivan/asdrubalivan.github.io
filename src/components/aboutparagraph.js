import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  color: blue;
  font-size: 3rem;
  text-transform: uppercase;
`

const Text = styled.p`
  color: red;
`

const AboutParagraph = ({ children, title }) => (
  <>
    <Title>{title}</Title>
    <Text>{children}</Text>
  </>
)

export default AboutParagraph
