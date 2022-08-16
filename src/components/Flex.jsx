import React from 'react'
import styled from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  margin:${({margin}) => margin || '0'};

  @media screen and (max-width: 768px) {
    flex-direction: ${props => props.direction768px};
    align-items: ${props => props.align768px};
    justify-content: ${props => props.justify768px};
    margin:${({margin768px}) => margin768px};
  }
`

const Flex = (props) => (
  <StyledFlex {...props} />
)

export default Flex
