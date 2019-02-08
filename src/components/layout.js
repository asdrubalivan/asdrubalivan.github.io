import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'
import Header from './header'
import './layout.css'
import woff from '../fonts/century_gothic/gothic.woff';

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
      font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
      src: url(${woff});
  }
  body {
    box-sizing: border-box;
  }
  html {
    font-size: 56.25%;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
