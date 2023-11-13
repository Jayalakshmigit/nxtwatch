import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const GamingCardItemLink = styled(Link)`
  text-decoration: none;
`
export const GamingCardListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: none;

  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }
`

export const GamingCardThumbnailImage = styled.img`
  height: 300px;
  width: 100vw;
  align-self: center;

  @media screen and (min-width: 768px) {
    width: 280px;
  }
`
export const GamingCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`
export const GamingCardHeading = styled.h1`
color = ${props => props.color};
font-size :15px;
font-family:'Roboto';
margin-bottom:0px;
`
export const GamingCardViewsAndDate = styled.p`
color = ${props => props.color};
font-size :12px;
font-family:'Roboto';

`
