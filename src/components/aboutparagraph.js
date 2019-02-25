import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  color: ${props => props.theme.darkBlue};
  font-size: 4rem;
  text-transform: uppercase;
  text-align: center;
  margin-top: 8rem;
  margin-bottom: 5rem;
  font-weight: 300;
`

const Text = styled.p`
  color: ${props => props.theme.darkBlue};
  text-align: center;
  font-size: 2rem;
  font-weight: 100;
`

const AboutParagraph = ({ children, title }) => (
  <>
    <Title>{title}</Title>
    <Text>{children}</Text>
  </>
)

export default AboutParagraph
