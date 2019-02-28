import React from 'react'
import styled from 'styled-components'
import BackgroundBlue from '../images/background_blue.jpg'
import TwitterIcon from '../images/social_media/twitter_gray.svg'
import GithubIcon from '../images/social_media/github_gray.svg'
import Logo from '../images/logo.svg'

const StyledFooter = styled.footer`
  background-image: url(${BackgroundBlue});
  position: relative;
  height: 30rem;
  width: 100%;
`

const SocialMediaButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20rem;
  height: 5rem;
  position: absolute;
  top: 2rem;
  left: 2rem;
`

const ButtonContainer = styled.img`
  width: 5rem;
  height: 5rem;
`

const LogoContainer = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 15rem;
  height: 15rem;
`

const Paragraph = styled.p`
  position: absolute;
  color: white;
  bottom: 2rem;
  font-weight: 600;
`

const LeftParagraph = styled(Paragraph)`
  left: 2rem;
`

const RightParagraph = styled(Paragraph)`
  right: 2rem;
`

const Footer = () => (
  <StyledFooter>
    <SocialMediaButtonDiv>
      <ButtonContainer alt="Twitter" src={TwitterIcon} />
      <ButtonContainer alt="Github" src={GithubIcon} />
    </SocialMediaButtonDiv>
    <LogoContainer alt="Logo" src={Logo} />
    <LeftParagraph>Designed by Lennin Zambrano</LeftParagraph>
    <RightParagraph>Asdrúbal Suárez. All Rights Reserved &copy;{' '}
      {(new Date()).getFullYear()}
    </RightParagraph>
  </StyledFooter>
)

export default Footer
