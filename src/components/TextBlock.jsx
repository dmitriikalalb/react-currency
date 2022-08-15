import React from 'react'
import styled from 'styled-components'

const StyledTextBlock = styled.div`
  margin-top: 15px;
`

const StyledTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 40px;
`

const StyledText = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
`

const TextBlock = (props) => (
  <StyledTextBlock>
    <StyledTitle>
      {/* eslint-disable-next-line react/prop-types */}
      {props.title || 'Lorem ipsum.'}
    </StyledTitle>
    <StyledText>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequuntur culpa fugit ipsa libero omnis
      pariatur quas, quidem similique voluptas?
    </StyledText>
    <StyledText>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, fugiat nisi praesentium provident quia sapiente!
    </StyledText>
    <StyledText>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, asperiores cupiditate esse id quibusdam
      similique soluta. Aliquam dicta dolore et exercitationem facilis nostrum odit! Adipisci dicta dolorem earum,
      eum exercitationem facere hic impedit iste molestias nulla, officia reiciendis soluta totam, velit vero! Animi
      atque consectetur doloremque officiis repudiandae! Aut, voluptates!
    </StyledText>
  </StyledTextBlock>
)

export default TextBlock
