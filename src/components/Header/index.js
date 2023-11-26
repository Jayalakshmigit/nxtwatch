import {withRouter} from 'react-router-dom'
import {Cookies} from 'js-cookie'
import Popup from 'reactjs-popup'

import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import ThemeChange from '../../context/ThemeChange'

import {
  NavbarHeader,
  Login,
  WebsiteLogo,
  ThemeContainer,
  ProfileImage,
  LogoutIcon,
  LogoutButton,
  ThemeButton,
  ModalContainer,
  CloseButton,
  LogoutDescription,
  ConfirmButton,
  ButtonsContainer,
} from './styledComponents'

const Header = props => (
  <ThemeChange.Consumer>
    {value => {
      const {activeTheme, changeTheme} = value
      const color = activeTheme ? '#ffffff' : '#00306e'
      const backgroundColor = activeTheme ? '#231f20' : '#f1f5f9'

      const onChangeTheme = () => {
        changeTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <NavbarHeader backgroundColor={backgroundColor}>
          <Login to="/">
            <WebsiteLogo
              src={
                activeTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </Login>
          <ThemeContainer>
            <ThemeButton
              type="button"
              data-testid="theme"
              onClick={onChangeTheme}
            >
              {activeTheme ? (
                <BsBrightnessHigh color="#ffffff" size={25} />
              ) : (
                <BsMoon size={25} />
              )}
            </ThemeButton>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
              alt="profile"
            />

            <Popup
              modal
              trigger={
                <LogoutButton
                  type="button"
                  backgroundColor={backgroundColor}
                  color={color}
                >
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <ModalContainer>
                  <LogoutDescription>
                    Are you sure, you want yo logout?
                  </LogoutDescription>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <LogoutIcon type="button">
                  <FiLogOut size={25} color={color} />
                </LogoutIcon>
              }
              className="popup-content"
            >
              {close => (
                <ModalContainer>
                  <LogoutDescription>
                    Are you sure, you want yo logout?
                  </LogoutDescription>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
          </ThemeContainer>
        </NavbarHeader>
      )
    }}
  </ThemeChange.Consumer>
)
export default withRouter(Header)
