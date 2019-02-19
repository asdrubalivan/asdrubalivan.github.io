import React from 'react'
import styled from 'styled-components'
import HeaderLinks from './headerlinks'
import whiteLogo from '../images/white_horizontal_logo.svg'

const SectionWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

const Img = styled.img`
  position: absolute;
  top: 4rem;
  left: 5rem;
`

const HeaderSection = ({ showLogo }) => (
  <SectionWrapper>
    {showLogo && <Img src={whiteLogo} alt="Small logo" />}
    <HeaderLinks />
  </SectionWrapper>
)

HeaderSection.defaultProps = {
  showLogo: true,
}

export default HeaderSection
