import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Cookies} from 'js-cookie'

import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogout} from 'react-icons/fi'
import {ImCross} from 'react-icons/im'

import {HiHome} from 'react-icons/hi'
import {AiFillFire} from 'react-icons/ai'
import {SiYouTubeGaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import ThemeChange from '../../context/ThemeChange'

import {
  MainHeaderContainer,
  HeaderContentsSmallContainer,
  HeaderContentsLargeContainer,
  ImageEl,
  HeaderButtonElSmall,
  HeaderButtonElLarge,
  ListContainer,
  ListItem,
  HeaderContainer,
} from './styledComponents'

class Header extends Component {
  state = {displayHeader: 'none'}

  showHeader = () => {
    this.setState({displayHeader: 'block'})
  }

  hideHeader = () => {
    this.setState({displayHeader: 'none'})
  }

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  render(){
      const {displayHeader} = this.state
      return(
          <ThemeChange.Consumer>
            {value=>{
                const {activeTheme,changeTheme} = value
                const color = activeTheme === 'light' ? '#00000000' : '#ffffffff'
                const backgroundColor = activeTheme === 'light' ? '#ffffff' : '#231f20'
                const navbarColor = activeTheme === 'light' ? '#00000000' : '#ffffffff'

                const onChangeTheme = () =>{
                    const Theme = activeTheme === 'light' ? 'dark':'light'
                    changeTheme(Theme)
                }

                return(
                    <MainHeaderContainer backgroundColor={`${backgroundColor}`}>
                        <ImageEl src = {
                            activeTheme === 'light' 
                            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                            :'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        }
                            alt = "website logo"
                            onClick = {this.onClickLogout}
                            cursor = "pointer"
                        />
                    </MainHeaderContainer>
                )

            }}
          </ThemeChange.Consumer>

      )
  }
}

export default withRouter(Header)
