import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import HeaderSection from './headersection'

const LogoImg = styled.img`
  height: 50vh;
  position: relative;
  margin-top: 15vh;
  margin-left: 50%;
  transform: translateX(-50%);
`

const Header = ({ showMainLogo, blueBackground, showSmallLogo }) => (
  <>
    <HeaderSection blueBackground={blueBackground} showLogo={showSmallLogo} />
    {showMainLogo && <LogoImg src={logo} alt="Logo" />}
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  blueBackground: PropTypes.bool,
  showSmallLogo: PropTypes.bool,
}

Header.defaultProps = {
  showMainLogo: false,
  blueBackground: true,
  showSmallLogo: true,
}

export default Header
