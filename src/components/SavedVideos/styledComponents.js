import styled from 'styled-components'

export const SearchVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 30px;
  background-color: ${props => props.backgroundColor};
`

export const SavedVideosContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`

export const Image = styled.img`
  width: 250px;
  margin: 10px;
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
