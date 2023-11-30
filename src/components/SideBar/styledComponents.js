import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
  width: 300px;
  position: sticky;
  position: -webkit-sticky;
`

export const NavItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-top: 30px;
`

export const NavTextItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: ${props => props.isActive};
  cursor: pointer;
`

export const NavItemText = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  width: 150px;
  margin-left: 20px;
`

export const SideBarBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
`

export const BottomText = styled.p`
  color: ${props => props.color};
  font-size: 20px;
  font-family: 'Roboto';
  width: 140px;
`
export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

export const IconImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 15px;
  cursor: pointer;
`
export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 15px;
`
