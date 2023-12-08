import {Component} from 'react'
import {Loader} from 'react-loader-spinner'
import {AiFillFire} from 'react-icons/ai'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoCard from '../VideoCard'

import ThemeChange from '../../context/ThemeChange'

import {
  SearchVideosContainer,
  SavedVideosContainer,
  LoaderContainer,
  HomeSideContainer,
  HomeStickyContainer,
  HomeContainer,
  TrendingHeadingContainer,
  TrendingLogo,
  TrendingHeading,
  NotFoundContainer,
  Image,
  Heading,
  Desc,
} from './styledComponents'

const SavedVideos = () => {
  renderSavedVideos = () => (
    <ThemeChange.Consumer>
      {value => {
        const {activeTheme, savedVideos} = value
        const backgroundColor = activeTheme ? '#0f0f0f0f' : '#f9f9f9f9'
        const color = activeTheme ? ' #f9f9f9' : '#181818'

        const videosAvailable = savedVideos.length === 0
        return videosAvailable ? (
          <NotFoundContainer backgroundColor={backgroundColor}>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <Heading className="cart-empty-heading" color={color}>
              No saved videos found
            </Heading>
            <Desc color={color}>
              You can save your videos while watching them.
            </Desc>
          </NotFoundContainer>
        ) : (
          <SearchVideosContainer backgroundColor={backgroundColor}>
            <TrendingHeadingContainer backgroundColor={backgroundColor}>
              <TrendingLogo>
                <AiFillFire size={25} />
              </TrendingLogo>
              <TrendingHeading color={color}>Saved Videos</TrendingHeading>
            </TrendingHeadingContainer>

            <SavedVideosContainer backgroundColor={backgroundColor}>
              {savedVideos.map(eachVideo => (
                <VideoCard key={eachVideo.id} videoCardDetails={eachVideo} />
              ))}
            </SavedVideosContainer>
          </SearchVideosContainer>
        )
      }}
    </ThemeChange.Consumer>
  )

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  render(){
    return (
      <ThemeChange.Consumer>
        {value => {
          const {activeTheme} = value
          const backgroundColor = activeTheme ? '#0f0f0f0f' : '#f9f9f9f9'

          return (
            <div data-testid="savedVideos">
              <Header />
              <HomeContainer
                data-testid="home"
                backgroundColor={backgroundColor}
              >
                <HomeStickyContainer>
                  <SideBar />
                </HomeStickyContainer>
                <HomeSideContainer backgroundColor={backgroundColor}>
                  {this.renderSavedVideos()}
                </HomeSideContainer>
              </HomeContainer>
            </div>
          )
        }}
      </ThemeChange.Consumer>
    )
  }
}

export default SavedVideos
