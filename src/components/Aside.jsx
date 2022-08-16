import React from 'react'
import styled from 'styled-components'

const StyledAside = styled.aside`
  width: 30%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const Aside = (props) => (
  <StyledAside {...props} />
)

export default Aside
