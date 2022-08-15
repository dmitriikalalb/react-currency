import React from 'react'
import styled from 'styled-components'
import MockData from '../content/mock-data.json'

const StyledListTitle = styled.h2`
  margin-top: 15px;
`

const StyledList = styled.ul`
  flex: 0 1 49%;
`

const StyledListElement = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid gray;
  cursor: pointer;
  
  &:hover, &.active {
    background: beige;
  }
`

const StyledListElementImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid black;
`

const StyledListElementTitle = styled.p`
  padding: 0 5px;
`

const CurrencyList = (props) => {

  return (
    <StyledList>
      <StyledListTitle>
        Currency
      </StyledListTitle>
      {
        MockData.map(currency =>
          <StyledListElement
            key={currency.link}
            onClick={() => props.clickAction(currency)}
            className={props.currency === currency ? 'active' : ''}
          >
            <StyledListElementImg src={require(`../images/${currency.img}`)} alt={currency.name}/>
            <StyledListElementTitle>
              {currency.name}
            </StyledListElementTitle>
          </StyledListElement>
        )
      }
    </StyledList>
  )
}

export default CurrencyList
