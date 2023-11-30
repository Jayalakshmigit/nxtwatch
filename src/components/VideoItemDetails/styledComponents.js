import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  width: 100vw;
  background-color: ${props => props.backgroundColor};
`
export const VideoItemDetailsSideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media screen and (min-width: 768px) {
    width: 70%;
  }
`
export const VideoItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 90%;
`
export const VideoItemDetailsTitle = styled.p`
  color: #181818;
  font-weight: bold;
  font-family: 'Roboto';
  margin-left: 10px;
`

export const ViewDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90;
`

export const LikesContainer = styled.div`
  display: flex;
`
export const ViewsText = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  margin-left: 10px;
`

export const IconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  color: ${props => props.color};
  border: 0px none;
  background-color: transparent;
  cursor: pointer;
`
export const HorizontalLine = styled.hr`
  color: #18181818;
  background-color: #181818;
  width: 100%;
  margin: 15px;
`

export const ChannelLogo = styled.img`
  height: 50px;
  width: 50px;
`

export const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: Column;
  margin-left: 20px;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  border-radius: 40px;
  padding: 10px;
  background-color: #cbd5e1;
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
