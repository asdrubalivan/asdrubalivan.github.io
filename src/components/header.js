import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import blueBackground from '../images/background_blue.jpg'
import logo from '../images/logo.svg'
import HeaderSection from './headersection'

const Wrapper = styled.section`
  position: relative;
  display: block;
`

const LogoImg = styled.img`
  height: 50vh;
  position: absolute;
  top: 30vh;
  left: 50%;
  transform: translateX(-50%);
`

const BlueBackground = styled.div`
  background-image: url(${blueBackground});
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1000;
`

const Header = ({ siteTitle, showMainLogo }) => (
  <Wrapper>
    <HeaderSection />
    <BlueBackground />
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
