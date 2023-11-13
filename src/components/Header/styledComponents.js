import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  padding: 10px;
  background-color: ${props => props.background};
  position: fixed;
  top: 0;

  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`

export const Login = styled(Link)`
  text-decoration: none;
`

export const WebsiteLogo = styled.img`
  height: 30px;
  width: 80px;

  @media screen and (min-width: 768px) {
    height: 40px;
    width: 100px;
  }
`
export const ThemeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`

export const ThemeButton = styled.button`
  border: none;
  background: none;
  margin-right: 10px;
`

export const LogoutIcon = styled.button`
  border: none;
  background: none;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  font-family: 'Roboto';
  border-color: ${props => props.color};
  border: 1px solid;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
  margin-left: 6px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  background-color: #cbd5e1;
  border-radius: 10px;
  padding: 20px;

  @media screen and (min-width: 768px) {
    height: 200px;
    width: 400px;
  }
`
export const CloseButton = styled.button`
  color: #cbd5e1;
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 900;
  background-color: transparent;
  border: 1px solid #cbd5e1;
  margin: 12px;
  padding: 8px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 6px;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`

export const LogoutDescription = styled.p`
  color: #000000;
  font-size: 15px;
  text-align: center;
  margin: 10px;
  font-family: 'Roboto';

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const ConfirmButton = styled.button`
  color: #ffffff;
  font-size: 12px;
  font-weight: 900px;
  font-family: 'Roboto';
  align-self: flex-end;
  background-color: #3b82f6;
  border: 1px solid #3b82f6;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  margin: 10px;
  border-radius: 6px;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
