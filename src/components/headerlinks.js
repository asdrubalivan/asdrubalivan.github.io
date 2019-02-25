import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const getColor = props => props.blueBackground ? 'white' : props.theme.darkBlue

const StyledLink = styled(Link)`
  color: ${props => getColor(props)};
  font-weight: 600;
  font-size: 2rem;
  text-decoration: none;
  text-transform: uppercase;
  &.active {
    border-bottom: 0.2rem solid ${props => getColor(props)};
  }
`

const Ul = styled.ul`
  display: inline-block;
  float: right;
  margin-right: 7rem;
  margin-top: ${props => props.theme.header.paddingTop};
`

const Li = styled.li`
  display: inline-block;
  margin-right: 5.5rem;
  &:last-child {
    margin-right: 0;
  }
`

const CustomLi = ({ to, children, blueBackground }) => (
  <Li>
    <StyledLink activeClassName="active" to={to} blueBackground={blueBackground}>
      {children}
    </StyledLink>
  </Li>
)

const HeaderLinks = ({ blueBackground }) => (
  <Ul>
    <CustomLi blueBackground={blueBackground} to="/">Home</CustomLi>
    <CustomLi blueBackground={blueBackground} to="/about">About</CustomLi>
    <CustomLi blueBackground={blueBackground} to="/works">Works</CustomLi>
    <CustomLi blueBackground={blueBackground} to="/blog">Blog</CustomLi>
    <CustomLi blueBackground={blueBackground} to="/contact">Contact</CustomLi>
  </Ul>
)

export default HeaderLinks
