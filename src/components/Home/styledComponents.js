import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  width: 100vw;
  background-color: ${props => props.backgroundColor};
`

export const BannerImageContainer = styled.div`
  display: ${props => props.display};
  height: 40vh;
  width: 80%;
  padding: 50px;
  background-size: cover;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png ');
`
export const GetItNowButton = styled.button`
  color: #181818;
  width: 100px;
  padding: 5px;
  border: 1px solid #181818;
  background-color: transparent;
`

export const BannerImage = styled.img`
  object-fit: fill;
  width: 250px;
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
export const CloseButton = styled.button`
  border-radius: 10px;
  margin-left: 10px;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`
export const ModalContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`
export const ModalDesc = styled.p`
  color: #181818;
  font-family: 'Roboto';
  font-size: 20px;
`
