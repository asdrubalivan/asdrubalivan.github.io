import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from './globalstyle'
import blueBackground from '../images/background_blue.jpg'

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
  background-size: cover;
  background-image: url(${blueBackground});
`

const Layout = ({ children, showMainLogo }) => (
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
        <MainDiv>
          <GlobalStyle />
          <Header
            showMainLogo={showMainLogo}
            siteTitle={data.site.siteMetadata.title} />
          {children}
        </MainDiv>
      </ThemeProvider>
    )}
  />
)

Layout.defaultProps = {
  showMainLogo: false,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
