import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
  width: 250px;
  height: 400px;
  padding-bottom: 10px;
  margin: 25px;
  border-bottom: 1px solid #000000;
`

export const ThumbnailImage = styled.img`
  height: 250px;
  width: 100%;
  object-fit: fill;
`

export const VideoCardBottomContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

export const VideoCardDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`

export const VideoCardText = styled.p`
  color: #475569;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: bold;
`

export const NavLink = styled(Link)`
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 10px;
`
