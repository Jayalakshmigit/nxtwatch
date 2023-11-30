import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {SearchVideosContainer} from '../Trending/styledComponents'

export const SearchVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 30px;
  background-color: ${props => props.backgroundColor};
`

export const SearchInput = styled.input`
  width: 250px;
  border: 1px solid #64748b;
  border-radius: 2px;
  margin-left: 60px;
  padding: 3px;
  padding-right: 10px;
  padding-left: 10px;
`

export const VideosContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  flex-wrap: wrap;
`
export const Image = styled.img`
  width: 250px;
  margin: 10px;
`
export const Heading = styled.h1`
  color: ${props => props.color};
  font-size: 30px;
  margin: 15px;
`

export const Desc = styled.p`
  color: ${props => props.color};
  font-size: 20px;
  margin: 15px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media screen and (min-width: 768px) {
    width: 70%;
  }
`
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
`

export const Retry = styled.button`
  color: #3b82f6;
  padding: 15px;
  cursor: pointer;
`

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 32px;
`
