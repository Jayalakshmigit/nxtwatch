import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import GamingCard from '../GamingCard'
import SideBar from '../SideBar'

import ThemeChange from '../../context/ThemeChange'

import './index.css'

import {
  SearchVideosContainer,
  LoaderContainer,
  VideosContainer,
  HomeStickyContainer,
  HomeSideContainer,
  HomeContainer,
  NotFoundContainer,
  Image,
  Heading,
  Desc,
  Retry,
  NavLink,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.views_count,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </div>
    </LoaderContainer>
  )

  renderGamingVideos = () => (
    <ThemeChange.Consumer>
      {value => {
        const {activeTheme} = value
        const {gamingVideos} = this.state
        const backgroundColor = activeTheme ? '#231f20' : '#0f0f0f0f'

        return (
          <SearchVideosContainer
            data-testid="gaming"
            backgroundColor={backgroundColor}
          >
            <Heading>Gaming</Heading>
            <VideosContainer backgroundColor={backgroundColor}>
              {gamingVideos.map(eachVideo => (
                <GamingCard
                  key={eachVideo.id}
                  gamingCardVideoDetails={eachVideo}
                />
              ))}
            </VideosContainer>
          </SearchVideosContainer>
        )
      }}
    </ThemeChange.Consumer>
  )

  renderFailureView = () => (
    <NotFoundContainer>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
        className="failure-view-gaming"
      />
      <Heading> Oops! Something Went Wrong</Heading>
      <Desc className="failure-description-gaming">
        We are having some trouble to complete your request. Please try again.
      </Desc>
      <NavLink>
        <Retry className="button" type="button" onClick={this.getGamingVideos}>
          Retry
        </Retry>
      </NavLink>
    </NotFoundContainer>
  )

  renderAllGamingVideosView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideos()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeChange.Consumer>
        {value => {
          const {activeTheme} = value
          const backgroundColor = activeTheme ? '#0f0f0f0f' : '#f9f9f9f9'

          return (
            <div data-testid="home">
              <Header />
              <HomeContainer
                data-test-id="home"
                backgroundColor={backgroundColor}
              >
                <HomeStickyContainer>
                  <SideBar />
                </HomeStickyContainer>
                <HomeSideContainer backgroundColor={backgroundColor}>
                  {this.renderAllGamingVideosView()}
                </HomeSideContainer>
              </HomeContainer>
            </div>
          )
        }}
      </ThemeChange.Consumer>
    )
  }
}

export default Gaming
