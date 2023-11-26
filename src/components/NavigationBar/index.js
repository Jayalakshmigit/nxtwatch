import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import ThemeChange from '../../context/ThemeChange'

import {
  NavigationBarLargeContainer,
  NavigationBarSmallContainer,
  NavBarOptions,
  NavBarLink,
  NavBarLinkContainer,
  NavBarText,
  ContactHeading,
  ContactInfo,
  ContactIcons,
  ContactNote,
  ContactImage,
  NavBar,
} from './styledComponents'

class NavigationBar extends Component {
  renderTabs = () => (
    <ThemeChange.Consumer>
      {value => {
        const {activeTheme, activeTab, changeTab} = value
        const backgroundColor = activeTheme ? '#231f20' : '#f1f5f9'
        const textColor = activeTheme ? '#f9f9f9' : '#231f20'
        const activeTabBackgroundColor = activeTheme ? '#475569' : '#cbd5e1'

        const onClickTabHome = () => {
          changeTab('Home')
        }

        const onClickTabTrending = () => {
          changeTab('Trending')
        }

        const onClickTabGaming = () => {
          changeTab('Gaming')
        }

        const onClickTabSavedVideos = () => {
          changeTab('SavedVideos')
        }

        return (
          <NavBar>
            <NavigationBarLargeContainer backgroundColor={backgroundColor}>
              <NavBarOptions>
                <NavBarLink to="/">
                  <NavBarLinkContainer
                    key="home"
                    backgroundColor={
                      activeTab === 'Home' ? activeTabBackgroundColor : 'none'
                    }
                    onClick={onClickTabHome}
                  >
                    <AiFillHome
                      size={30}
                      color={activeTab === 'Home' ? '#ff0b37' : '#9090990'}
                    />
                    <NavBarText color={textColor}>Home</NavBarText>
                  </NavBarLinkContainer>
                </NavBarLink>

                <NavBarLink to="/trending">
                  <NavBarLinkContainer
                    key="trending"
                    backgroundColor={
                      activeTab === 'trending'
                        ? activeTabBackgroundColor
                        : 'none'
                    }
                    onClick={onClickTabTrending}
                  >
                    <HiFire
                      size={30}
                      color={activeTab === 'Trending' ? '#ff0b37' : '#9090990'}
                    />
                    <NavBarText color={textColor}>Trending</NavBarText>
                  </NavBarLinkContainer>
                </NavBarLink>

                <NavBarLink to="/gaming">
                  <NavBarLinkContainer
                    key="gaming"
                    backgroundColor={
                      activeTab === 'Gaming' ? activeTabBackgroundColor : 'none'
                    }
                    onClick={onClickTabGaming}
                  >
                    <SiYoutubegaming
                      size={30}
                      color={activeTab === 'Gaming' ? '#ff0b37' : '#9090990'}
                    />
                    <NavBarText color={textColor}>Gaming</NavBarText>
                  </NavBarLinkContainer>
                </NavBarLink>
                <NavBarLink to="/saved-videos">
                  <NavBarLinkContainer
                    key="savedVideos"
                    backgroundColor={
                      activeTab === 'SavedVideos'
                        ? activeTabBackgroundColor
                        : 'none'
                    }
                    onClick={onClickTabSavedVideos}
                  >
                    <CgPlayListAdd
                      size={30}
                      color={
                        activeTab === 'SavedVideos' ? '#ff0b37' : '#9090990'
                      }
                    />
                    <NavBarText color={textColor}>Saved Videos</NavBarText>
                  </NavBarLinkContainer>
                </NavBarLink>
              </NavBarOptions>
              <ContactInfo>
                <ContactHeading color={textColor}>CONTACT US</ContactHeading>
                <ContactIcons>
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />

                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt=" linked in logo"
                  />
                </ContactIcons>
                <ContactNote color={textColor}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactNote>
              </ContactInfo>
            </NavigationBarLargeContainer>
            <NavigationBarSmallContainer backgroundColor={backgroundColor}>
              <NavBarLink to="/">
                <AiFillHome
                  size={30}
                  onClick={onClickTabHome}
                  color={activeTab === 'Home' ? '#ff0b37' : '#9090990'}
                />
              </NavBarLink>
              <NavBarLink to="/trending">
                <HiFire
                  size={30}
                  onClick={onClickTabTrending}
                  color={activeTab === 'Trending' ? '#ff0b37' : '#9090990'}
                />
              </NavBarLink>
              <NavBarLink to="/gaming">
                <SiYoutubegaming
                  size={30}
                  onClick={onClickTabGaming}
                  color={activeTab === 'Gaming' ? '#ff0b37' : '#9090990'}
                />
              </NavBarLink>
              <NavBarLink to="/saved-videos">
                <CgPlayListAdd
                  size={30}
                  onClick={onClickTabSavedVideos}
                  color={activeTab === 'SavedVideos' ? '#ff0b37' : '#9090990'}
                />
              </NavBarLink>
            </NavigationBarSmallContainer>
          </NavBar>
        )
      }}
    </ThemeChange.Consumer>
  )

  render() {
    return <>{this.renderTabs()}</>
  }
}

export default NavigationBar
