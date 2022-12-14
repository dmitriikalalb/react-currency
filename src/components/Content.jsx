import React from 'react'
import styled from 'styled-components'

const StyledContent = styled.section`
  padding: 0 10px;
  width: 70%;
  
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const Content = (props) => (
  <StyledContent {...props} />
)

export default Content
