import React from 'react'
import styled from 'styled-components'
import Flex from './Flex';

const StyledCurrencyBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`

const StyledCardImg = styled.img`
  width: 40px;
  height: 40px;
  border: 1px solid black;
  border-radius: 50%;
`

const StyledCardTitle = styled.p`
  font-size: 20px;
  padding: 5px 0;
`

const StyledArrow = styled.i`
  width: 80px;
  height: 25px;
  display: flex;
  
  &:before {
  content: "";
  background: currentColor;
  width: 15px;
  clip-path: polygon(0 10px,calc(100% - 15px) 10px,calc(100% - 15px) 0,100% 50%,calc(100% - 15px) 100%,calc(100% - 15px) calc(100% - 10px),0 calc(100% - 10px));
  flex-grow: 1;
`

const CurrencyBlock = (props) => {

  return (
    <StyledCurrencyBlock {...props}>
      <Flex direction="column" align="center" margin="0 25px">
        <StyledCardImg src={require(`../images/${props.currencyTo.img}`)} alt={props.currencyTo.name}/>
        <StyledCardTitle>
          {props.currencyTo.name}
        </StyledCardTitle>
      </Flex>
      <StyledArrow/>
      <Flex direction="column" align="center" margin="0 25px">
        <StyledCardImg src={require(`../images/${props.currencyFrom.img}`)} alt={props.currencyFrom.name}/>
        <StyledCardTitle>
          {props.currencyFrom.name}
        </StyledCardTitle>
      </Flex>
    </StyledCurrencyBlock>
  )
}

export default CurrencyBlock;
