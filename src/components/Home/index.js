import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import SideBar from '../SideBar'
import Header from '../Header'

import ThemeChange from '../../context/ThemeChange'
import SearchVideos from '../SearchVideos'

import './index.css'

import {
  HomeContainer,
  HomeSideContainer,
  BannerImage,
  HomeStickyContainer,
  CloseButton,
  ModalContainer,
  BannerImageContainer,
  GetItNowButton,
  ModalDesc,
} from './styledComponents'

class Home extends Component {
  state = {display: 'flex'}

  onCloseBanner = () => {
    this.setState({display: 'none'}, this.renderHomeVideos)
  }

  renderHomeVideos = () => {
    const {display} = this.state

    return (
      <>
        <BannerImageContainer data-testid="banner" display={display}>
          <ModalContainer>
            <BannerImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <ModalDesc>Buy Nxt Watch Premium </ModalDesc>
            <GetItNowButton>GET IT NOW</GetItNowButton>
          </ModalContainer>
          <CloseButton
            type="button"
            data-testid="close"
            onClick={this.onCloseBanner}
          >
            <IoMdClose size={20} />
          </CloseButton>
        </BannerImageContainer>
        <SearchVideos />
      </>
    )
  }

  render() {
    return (
      <ThemeChange.Consumer>
        {value => {
          const {activeTheme} = value
          const backgroundColor = activeTheme ? '#181818' : '#f9f9f9f9'

          return (
            <div data-testid="home">
              <Header />
              <HomeContainer backgroundColor={backgroundColor}>
                <HomeStickyContainer>
                  <SideBar onChange={this.changeTab} />
                </HomeStickyContainer>
                <HomeSideContainer backgroundColor={backgroundColor}>
                  {this.renderHomeVideos()}
                </HomeSideContainer>
              </HomeContainer>
            </div>
          )
        }}
      </ThemeChange.Consumer>
    )
  }
}

export default Home
