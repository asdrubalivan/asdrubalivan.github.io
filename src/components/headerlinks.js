import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color: white;
  font-weight: 600;
  font-size: 2rem;
  text-decoration: none;
  text-transform: uppercase;
  &.active {
    border-bottom: 0.2rem solid white;
  }
`

const Ul = styled.ul`
  position: absolute;
  right: 7rem;
  top: 9vh;
`

const Li = styled.li`
  display: inline-block;
  margin-right: 5.5rem;
  &:last-child {
    margin-right: 0;
  }
`

const CustomLi = ({ to, children }) => (
  <Li><StyledLink activeClassName="active" to={to}>{children}</StyledLink></Li>
)

const HeaderLinks = () => (
  <Ul>
    <CustomLi to="/">Home</CustomLi>
    <CustomLi to="/about">About</CustomLi>
    <CustomLi to="/works">Works</CustomLi>
    <CustomLi to="/blog">Blog</CustomLi>
    <CustomLi to="/contact">Contact</CustomLi>
  </Ul>
)

export default HeaderLinks
