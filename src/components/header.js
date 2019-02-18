import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import bg from '../images/background_blue.jpg'
import logo from '../images/logo.svg'

const Wrapper = styled.div`
  background-image: url(${bg});
  height: 100vh;
  background-size: cover;
  position: relative;
`

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

const LogoImg = styled.img`
  height: 50vh;
  position: absolute;
  top: 30vh;
  left: 50%;
  transform: translateX(-50%);
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Ul>
      <Li><StyledLink activeClassName="active" to="/">Home</StyledLink></Li>
      <Li><StyledLink activeClassName="active" to="/about">About</StyledLink></Li>
      <Li><StyledLink activeClassName="active" to="/works">Works</StyledLink></Li>
      <Li><StyledLink activeClassName="active" to="/blog">Blog</StyledLink></Li>
      <Li><StyledLink activeClassName="active" to="/contact">Contact</StyledLink></Li>
    </Ul>
    <LogoImg src={logo} />
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
