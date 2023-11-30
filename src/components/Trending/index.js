import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiFillFire} from 'react-icons/ai'

import Header from '../Header'
import SideBar from '../SideBar'
import VideoCard from '../VideoCard'
import ThemeChange from '../../context/ThemeChange'

import {
  SearchVideosContainer,
  VideosContainer,
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
  Retry,
  NavLink,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    searchedVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getSuggestionVideos()
  }

  getSuggestionVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
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
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },

        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.views_count,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({
        searchedVideos: updatedData,
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

  renderTrendingVideosView = () => {
    const {searchedVideos} = this.state
    return (
      <ThemeChange.Consumer>
        {value => {
          const {activeTheme} = value
          const backgroundColor = activeTheme ? '#231f20' : '#f9f9f9'
          const textColor = activeTheme ? '#f9f9f9' : ' #18181818'

          return (
            <SearchVideosContainer
              data-testid="trending"
              backgroundColor={backgroundColor}
            >
              <TrendingHeadingContainer
                color={textColor}
                backgroundColor={backgroundColor}
              >
                <TrendingLogo>
                  <AiFillFire size={25} />
                  <TrendingHeading color={textColor}>Trending</TrendingHeading>
                </TrendingLogo>
              </TrendingHeadingContainer>

              <VideosContainer>
                {searchedVideos.map(eachVideo => (
                  <VideoCard key={eachVideo.id} videoCardDetails={eachVideo} />
                ))}
              </VideosContainer>
            </SearchVideosContainer>
          )
        }}
      </ThemeChange.Consumer>
    )
  }

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

  renderTrendingVideosView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideosView()
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
            <div>
              <Header />
              <HomeContainer
                data-test-id="home"
                backgroundColor={backgroundColor}
              >
                <HomeStickyContainer>
                  <SideBar />
                </HomeStickyContainer>
                <HomeSideContainer backgroundColor={backgroundColor}>
                  {this.renderTrendingVideosView()}
                </HomeSideContainer>
              </HomeContainer>
            </div>
          )
        }}
      </ThemeChange.Consumer>
    )
  }
}

export default Trending
