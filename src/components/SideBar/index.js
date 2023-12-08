import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import ThemeChange from '../../context/ThemeChange'

import {
  SideBarContainer,
  NavItemsContainer,
  NavItemText,
  NavTextItemContainer,
  SideBarBottomContainer,
  BottomText,
  IconsContainer,
  IconImage,
  NavLink,
} from './styledComponents'

class SideBar extends Component {
  renderTabs = () => (
    <ThemeChange.Consumer>
      {value => {
        const {activeTheme, activeTab, changeTab} = value
        const backgroundColor = activeTheme ? '#ffffff' : '#00000000'
        const textColor = activeTheme ? '#f9f9f9' : '#231f20'

        const onClickTabHome = () => {
          changeTab('HOME')
        }

        const onClickTabTrending = () => {
          changeTab('TRENDING')
        }

        const onClickTabGaming = () => {
          changeTab('GAMING')
        }

        const onClickTabSavedVideos = () => {
          changeTab('SAVED VIDEOS')
        }

        return
        <>
          <SideBarContainer>
            <NavItemsContainer>
              <NavTextItemContainer
                isActive={activeTab === 'HOME' ? '#f1f5f9' : 'transparent'}
                isActiveColor={backgroundColor}
                onClick={onClickTabHome}
              >
                <NavLink
                  to="/"
                  color={activeTab === 'HOME' ? '#ff0000' : {backgroundColor}}
                >
                  <AiFillHome size={25} />
                  <NavItemText
                    color={activeTab === 'HOME' ? '#ff0000' : {textColor}}
                  >
                    Home
                  </NavItemText>
                </NavLink>
              </NavTextItemContainer>

              <NavTextItemContainer
                isActive={activeTab === 'TRENDING' ? '#f1f5f9' : 'transparent'}
                isActiveColor={backgroundColor}
                onClick={onClickTabTrending}
              >
                <NavLink
                  to="/trending"
                  color={activeTab === 'TRENDING' ? '#ff0000' : {textColor}}
                >
                  <HiFire size={25} />
                  <NavItemText
                    color={
                      activeTab === 'TRENDING' ? '#ff0000' : {backgroundColor}
                    }
                  >
                    Trending
                  </NavItemText>
                </NavLink>
              </NavTextItemContainer>

              <NavTextItemContainer
                isActive={activeTab === 'GAMING' ? '#f1f5f9' : 'transparent'}
                isActiveColor={backgroundColor}
                onClick={onClickTabGaming}
              >
                <NavLink
                  to="/gaming"
                  color={activeTab === 'GAMING' ? '#ff0000' : {textColor}}
                >
                  <SiYoutubegaming size={25} />
                  <NavItemText
                    color={
                      activeTab === 'GAMING' ? '#ff0000' : {backgroundColor}
                    }
                  >
                    Gaming
                  </NavItemText>
                </NavLink>
              </NavTextItemContainer>

              <NavTextItemContainer
                isActive={
                  activeTab === 'SAVED VIDEOS' ? '#f1f5f9' : 'transparent'
                }
                isActiveColor={backgroundColor}
                onClick={onClickTabSavedVideos}
              >
                <NavLink
                  to="/saved-videos"
                  color={activeTab === 'SAVED VIDEOS' ? '#ff0000' : {textColor}}
                >
                  <CgPlayListAdd size={25} />
                  <NavItemText
                    color={
                      activeTab === 'SAVED VIDEOS'
                        ? '#ff0000'
                        : {backgroundColor}
                    }
                  >
                    Saved videos
                  </NavItemText>
                </NavLink>
              </NavTextItemContainer>

              <SideBarBottomContainer>
                <BottomText color={textColor}>CONTACT US</BottomText>

                <IconsContainer>
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />

                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />

                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in  logo"
                  />
                </IconsContainer>

                <NavItemText color={textColor}>
                  Enjoy! Now to see your channels and recommendations!
                </NavItemText>
              </SideBarBottomContainer>
              </>
           
        </SideBarContainer>
      }}
    </ThemeChange.Consumer>
  )

  render() {
    return <>{this.renderTabs()}</>
  }
}

export default SideBar
