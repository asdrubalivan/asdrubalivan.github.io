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
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  &.active {
    text-decoration: underline;
  }
`

const Ul = styled.ul`
  position: absolute;
  right: 6rem;
  top: 3rem;
`

const Li = styled.li`
  display: inline-block;
  margin-right: 1.2rem;
  &:last-child {
    margin-right: 0;
  }
`

const LogoImg = styled.img`
  width: 40rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Ul>
      <Li><StyledLink activeClassName="active" to="/">Home</StyledLink></Li>
      <Li><StyledLink activeClassName="active" to="/about">About</StyledLink></Li>
      <Li><StyledLink activeClassName="active" to="/works">Works</StyledLink></Li>
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
