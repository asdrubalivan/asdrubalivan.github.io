import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import HeaderSection from './headersection'

const Wrapper = styled.section`
  position: relative;
  display: block;
`

const LogoImg = styled.img`
  height: 50vh;
  position: relative;
  margin-top: 15vh;
  margin-left: 50%;
  transform: translateX(-50%);
`

const Header = ({ siteTitle, showMainLogo, background }) => (
  <Wrapper>
    <HeaderSection />
    {showMainLogo && <LogoImg src={logo} alt="Logo" />}
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  background: PropTypes.oneOf(['blue', 'white']),
}

Header.defaultProps = {
  siteTitle: ``,
  showMainLogo: false,
  background: 'blue',
}

export default Header
