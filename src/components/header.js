import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import bg from '../images/background_blue.jpg'

const Wrapper = styled.div`
  background-image: url(${ bg });
  height: 100vh;
  background-size: cover;
  position: relative;
`

const StyledLink = styled(Link)`
  color: white;
  text-transform: uppercase;
  font-weight: 800;
  &:not(.active) {
    text-decoration: none;
  }
`

const Ul = styled.ul`
  position: absolute;
  right: 2rem;
  top: 2rem;
`

const Li = styled.li`
  display: inline-block;
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Ul>
      <Li><StyledLink activeClassName="active" to="/">Home</StyledLink></Li>
      <Li><StyledLink activeClassName="active" to="/about">About</StyledLink></Li>
      <Li><StyledLink activeClassName="active" to="/works">Works</StyledLink></Li>
      <Li><StyledLink activeClassName="active" to="/contact">Contact</StyledLink></Li>
    </Ul>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
