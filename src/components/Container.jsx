import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  margin: auto;
  max-width: 1140px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1140px) {
    max-width: 960px;
  }

  @media screen and (max-width: 992px) {
    max-width: 720px;
  }

  @media screen and (max-width: 768px) {
    max-width: 540px;
  }

  @media screen and (max-width: 576px) {
    max-width: 100%;
  }
`

const Container = (props) => {
  return <StyledContainer {...props} />
}

export default Container
