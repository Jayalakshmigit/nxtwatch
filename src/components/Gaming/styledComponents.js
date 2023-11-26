import styled from 'styled-components'

export const GamingContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${props => props.backgroundColor};
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0;
  }
`
export const GamingHeadingIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 80px;
  margin-left: 10px;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`

export const GamingListItems = styled.ul`
display:flex;
flex-wrap:wrap;
list-style-type:list-style-type: none;
padding:0px;

@media screen and (min-width:768px){
    margin-left:40px;
}
`

export const GamingHeadingContainer = styled.div`
  display: flex;
  align-items: center;
`
export const GamingDescription = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 900;

  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`
