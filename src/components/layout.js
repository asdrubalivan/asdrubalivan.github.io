import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './globalstyle'

const theme = {
  darkBlue: '#152F4A',
  gray: '#7D8899',
  lightGray: '#F0F1F3',
}

const Layout = ({ children }) => (
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
        <>
          <GlobalStyle />
          <Header siteTitle={data.site.siteMetadata.title} />
          {children}
        </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
