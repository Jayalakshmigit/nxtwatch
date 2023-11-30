import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SearchVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.backgroundColor};
  overflow-y: scroll;
  padding: 30px;
`
export const VideosContainer = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  background-color: ${props => props.backgroundColor};
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

export const HomeStickyContainer = styled.div`
  position: sticky;
  position: -webkit-sticky;
`

export const HomeSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props.backgroundColor};
  overflow-y: scroll;
`

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: ${props => props.backgroundColor};
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
`

export const Image = styled.img`
  width: 300px;
  margin: 20px;
`

export const Heading = styled.h1`
  color: #000000;
  font-size: 30px;
  text-align: center;
`
export const Desc = styled.p`
  color: #000000;
  font-size: 20px;
  text-align: center;
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
export const TrendingHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  width: 100%;
  margin-left: 50px;
  background-color: ${props => props.backgroundColor};
`

export const TrendingLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border: 0px none;
  border-radius: 50px;
  background-color: #94a3b8;
  margin: 10px;
`

export const TrendingHeading = styled.h1`
  color: ${props => props.color};
  font-weight: bold;
  font-family: 'Roboto';
`
