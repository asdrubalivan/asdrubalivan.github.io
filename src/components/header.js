import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import bg from '../images/background_blue.jpg'
import logo from '../images/logo.svg'
import HeaderSection from './headersection'

const Wrapper = styled.section`
  background-image: url(${bg});
  min-height: 100vh;
  background-size: cover;
  position: relative;
`

const LogoImg = styled.img`
  height: 50vh;
  position: absolute;
  top: 30vh;
  left: 50%;
  transform: translateX(-50%);
`

const Header = ({ siteTitle, showMainLogo }) => (
  <Wrapper>
    <HeaderSection />
    {showMainLogo && <LogoImg src={logo} alt="Logo" />}
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  showMainLogo: false,
}

export default Header
