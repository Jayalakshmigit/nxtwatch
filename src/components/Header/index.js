import {Link, withRouter} from 'react-router-dom'
import {Cookies} from 'js-cookie'
import Popup from 'reactjs-popup'

import {BsMoon} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'

import ThemeChange from '../../context/ThemeChange'

import {
  NavbarHeader,
  WebsiteLogo,
  ThemeContainer,
  ProfileImage,
  LogoutButton,
  ThemeButton,
  ModalContainer,
  CloseButton,
  ModalDescription,
  ConfirmButton,
  AlignRow,
  AlignColumn,
  ContentListItems,
} from './styledComponents'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ThemeChange.Consumer>
      {value => {
        const {activeTheme, changeTheme} = value
        const color = activeTheme ? '#f9f9f9' : '#181818'
        const backgroundColor = activeTheme ? '#181818' : '#f9f9f9'

        const onChangeTheme = () => {
          changeTheme()
        }

        const websiteLogo = activeTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <NavbarHeader backgroundColor={backgroundColor}>
            <Link to="/">
              <WebsiteLogo src={websiteLogo} alt="website logo" />
            </Link>
            <ThemeContainer>
              <ContentListItems>
                <ThemeButton
                  type="button"
                  data-testid="theme"
                  onClick={onChangeTheme}
                  color={color}
                >
                  {activeTheme ? <FiSun /> : <BsMoon />}
                </ThemeButton>
              </ContentListItems>

              <ContentListItems>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
                  alt="profile"
                />
              </ContentListItems>

              <ContentListItems>
                <Popup
                  modal
                  trigger={
                    <LogoutButton data-testid="iconButton" type="button">
                      Logout
                    </LogoutButton>
                  }
                >
                  {close => (
                    <ModalContainer>
                      <AlignColumn>
                        <ModalDescription>
                          {' '}
                          Are you sure, you want yo logout
                        </ModalDescription>
                        <AlignRow>
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
                        </AlignRow>
                      </AlignColumn>
                    </ModalContainer>
                  )}
                </Popup>
              </ContentListItems>
            </ThemeContainer>
          </NavbarHeader>
        )
      }}
    </ThemeChange.Consumer>
  )
}
export default withRouter(Header)
