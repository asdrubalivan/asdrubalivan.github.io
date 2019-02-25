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
    border-bottom: 0.1rem solid ${props.blueBackground ? 'white' : props.theme.darkBlue};
  `}
`

const Img = styled.img`
  display: inline-block;
  margin-top: 3rem;
  margin-left: 5rem;
  ${props => !props.showLogo && css`
    visibility: hidden;`}
`

const MarginBlock = styled.div`
  margin-bottom: 1rem;
`

const HeaderSection = ({ showLogo, blueBackground, showBorder }) => (
  <SectionWrapper
    showBorder={showBorder}
    blueBackground={blueBackground}>
    <Img src={blueBackground ? whiteLogo : blueLogo}
      alt="Small logo"
      showLogo={showLogo} />
    <HeaderLinks />
    <Clearfix />
    <MarginBlock />
  </SectionWrapper>
)

HeaderSection.defaultProps = {
  showLogo: true,
  showBorder: true,
  blueBackground: true,
}

HeaderSection.propTypes = {
  showLogo: PropTypes.bool,
  blueBackground: PropTypes.bool,
  showBorder: PropTypes.bool,
}

export default HeaderSection
