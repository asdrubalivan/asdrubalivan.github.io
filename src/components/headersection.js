import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import HeaderLinks from './headerlinks'
import Clearfix from './clearfix'
import whiteLogo from '../images/white_horizontal_logo.svg'
import blueLogo from '../images/blue_horizontal_logo.svg'

const SectionWrapper = styled.section`
  display: block;
  height: 100%;
  width: 100%;
  ${props => props.showBorder && css`
    border-bottom: 0.1rem solid white;
  `}
`

const Img = styled.img`
  display: inline-block;
  margin-top: 3rem;
  margin-left: 5rem;
`

const MarginBlock = styled.div`
  margin-bottom: 1rem;
`

const HeaderSection = ({ showLogo, logoColor, showBorder }) => (
  <SectionWrapper showBorder={showBorder}>
    {showLogo &&
      <Img src={logoColor === 'white' ? whiteLogo : blueLogo} alt="Small logo" />}
    <HeaderLinks />
    <Clearfix />
    <MarginBlock />
  </SectionWrapper>
)

HeaderSection.defaultProps = {
  showLogo: true,
  logoColor: 'white',
  showBorder: true,
}

HeaderSection.propTypes = {
  showLogo: PropTypes.bool,
  logoColor: PropTypes.oneOf(['blue', 'white']),
  showBorder: PropTypes.bool,
}

export default HeaderSection
