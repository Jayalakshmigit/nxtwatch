import styled from 'styled-components'

export const NavbarHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 30px;
  padding-left: 30px;
  padding-right: 30px;
  position: sticky;
  scroll-behavior: smooth;
  background-color: ${props => props.background};

  @media screen and (man-width: 768px) {
    flex-direction: column;
  }
`

export const WebsiteLogo = styled.img`
  width: 110px;

  @media screen and (min-width: 768px) {
    width: 165px;
  }
`
export const ThemeContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  width: 15%;
`

export const ContentListItems = styled.li`
  display: flex;
`

export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  margin-left: 10px;
`

export const ThemeButton = styled.button`
  color: ${props => props.color};
  border: 0px none;
  background-color: transparent;
  cursor: pointer;
`

export const LogoutButton = styled.button`
  color: #ffffff;
  font-size: 10px;
  font-weight: 600;
  font-family: 'Roboto';
  background-color: #0967d2;
  border: none;
  border-radius: 4px;
  margin-left: 14px;
  outline: none;
  cursor: pointer;
`
export const ModalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 200px;
  width: 400px;
  background-color: #cbd5e1;
  border-radius: 10px;
`

export const AlignRow = styled.div`
  display: flex;
  justify-content: space-between;
`

export const AlignColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  background-color: #cbd5e1;
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

export const ModalDescription = styled.p`
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
`
