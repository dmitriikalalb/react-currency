import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.table`
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
`

const StyledThead = styled.thead`
`

const StyledTbody = styled.tbody`
`

const StyledTr = styled.tr`
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 20px;
`

const StyledTh = styled.th`
  padding: 10px;
  text-align: center;
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
`

const StyledTd = styled.td`
  padding: 10px;
  text-align: center;
`

const rows = []
for (let i = 0; i < Math.random() * 10; i++) {
  rows.push(
    <StyledTr key={i}>
      <StyledTd>UAE Dirham</StyledTd>
      <StyledTd>04/01/2022</StyledTd>
      <StyledTd>$1,190</StyledTd>
      <StyledTd>03/01/2016 - 03/12/2022</StyledTd>
    </StyledTr>
  )
}

const Table = (props) => (
  <StyledTable {...props}>
    <StyledThead>
      <StyledTr>
        <StyledTh scope="col">Currency</StyledTh>
        <StyledTh scope="col">Due Date</StyledTh>
        <StyledTh scope="col">Amount</StyledTh>
        <StyledTh scope="col">Period</StyledTh>
      </StyledTr>
    </StyledThead>
    <StyledTbody>
      { rows }
    </StyledTbody>
  </StyledTable>
)

export default Table
