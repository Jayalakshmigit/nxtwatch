import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: none;
  background-color: ${props => props.backgroundColor};

  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0;
  }
`

export const BannerContainer = styled.div`
  display: ${props => props.display};
  justify-content: space-between;
  background-color: cover;
  height: 200px;
  width: 100%;
  padding: 20px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
`

export const BannerLeftPart = styled.div`
  width: 50%;
`

export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const BannerHeading = styled.p`
  color: #000000;
  font-size: 15px;
  font-family: 'Roboto';

  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
`

export const BannerImage = styled.img`
  height: 30px;
  width: 80px;
`

export const BannerButton = styled.button`
  color: #000000;
  border: 1px solid #000000;
  background-color: none;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`

export const BannerCloseButton = styled.button`
  height: 25px;
  background-color: none;
  border: none;
`

export const SearchContainer = styled.button`
  display: flex;
  height: 40px;
  width: 60%;
  border: 1px solid #909090;
  border-radius: 3px;
  margin: 20px;

  @media screen and (min-width: 576px) {
    width: 40%;
  }
`

export const SearchInput = styled.input`
  color: ${props => props.color};
  font-family: 'Roboto';
  background-color: none;
  width: 100%;
  border: none;
  padding: 5px;
  outline: none;
`

export const SearchIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #90909090;
  width: 70px;
`
