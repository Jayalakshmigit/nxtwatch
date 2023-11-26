import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBar = styled.div`
  display: flex;
`
export const NavigationBarLargeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 92%;
  width: 250px;
  position: fixed;
  top: 60px;
  background-color: ${props => props.backgroundColor};

  @media screen and (max-width: 768px) {
    display: flex;
  }
`

export const NavBarOptions = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  list-style-type: none;
  padding: 0px;
  margin-top: 0px;
`

export const NavBarLink = styled(Link)`
  text-decoration: none;
`

export const NavBarLinkContainer = styled.li`
  display: flex;
  align-items: center;
  background-color: ${props => props.backgroundColor};
  padding-left: 20px;
`

export const NavBarText = styled.p`
  color: ${props => props.textColor};
  font-size: 18px;
  font-family: 'Roboto';
  margin-left: 15px;
`
export const ContactHeading = styled.p`
  color: ${props => props.textColor};
  font-size: 25px;
  font-weight: bold;
  font-family: 'Roboto';
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`

export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
`

export const ContactNote = styled.p`
  color: ${props => props.textColor};
  font-size: 18px;
  font-family: 'Roboto';
`
export const ContactImage = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50px;
  margin-right: 10px;
`
export const NavigationBarSmallContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 10px;
  position: fixed;
  bottom: 0;
  background-color: ${props => props.backgroundColor};

  @media screen and (min-width: 768px) {
    display: none;
  }
`
