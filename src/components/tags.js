import styled from 'styled-components'
import PropTypes from 'prop-types'

const getColor = props => props.blueBackground ? 'white' : props.theme.darkBlue

const defaultProps = {
  blueBackground: false,
}

const propTypes = {
  blueBackground: PropTypes.bool,
}

export const H2 = styled.h2`
  color: ${props => getColor(props)};
  font-size: 4rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 300;
`

H2.defaultProps = defaultProps
H2.propTypes = propTypes

export const P = styled.p`
  color: ${props => getColor(props)};
  font-size: 2rem;
  font-weight: 100;
`

P.defaultProps = defaultProps
P.propTypes = propTypes
