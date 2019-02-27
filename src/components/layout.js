import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from './globalstyle'
import blueBackground from '../images/background_blue.jpg'
import whiteBackground from '../images/background_white.jpg'

const theme = {
  darkBlue: '#152F4A',
  gray: '#7D8899',
  lightGray: '#F0F1F3',
  header: {
    paddingTop: '7vh',
  }
}

const MainDiv = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-size: cover;
  background-image: url(${
  props => props.blueBackground ? blueBackground : whiteBackground});
`

MainDiv.props = {
  blueBackground: PropTypes.bool,
}

MainDiv.defaultProps = {
  blueBackground: true,
}

const Layout = ({ children, showMainLogo, showSmallLogo, blueBackground }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
            description
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <MainDiv blueBackground={blueBackground}>
          <GlobalStyle />
          <Header
            showMainLogo={showMainLogo}
            showSmallLogo={showSmallLogo}
            blueBackground={blueBackground}
            siteTitle={data.site.siteMetadata.title} />
          {children}
        </MainDiv>
      </ThemeProvider>
    )}
  />
)

Layout.defaultProps = {
  showSmallLogo: true,
  showMainLogo: false,
  blueBackground: true,
}

Layout.propTypes = {
  children: PropTypes.node,
  showMainLogo: PropTypes.bool,
  blueBackground: PropTypes.bool,
  showSmallLogo: PropTypes.bool,
}

export default Layout
