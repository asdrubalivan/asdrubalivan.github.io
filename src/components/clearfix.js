import styled from 'styled-components'

const Clearfix = styled.div`
  display: inline-block;
  &:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }
`

export default Clearfix
