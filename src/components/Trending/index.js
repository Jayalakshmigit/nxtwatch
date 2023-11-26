import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import VideosCard from '../VideosCard'
import ThemeChange from '../../context/ThemeChange'

import FailureView from '../FailureView'

import {
  TrendingContainer,
  TrendingTitleIconContainer,
  TrendingVideoTitle,
  TrendingVideoList,
  TrendingText,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
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
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.views_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        trendingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderTrendingVideosView = () => {
    const {trendingVideos} = this.state
    return (
      <TrendingVideoList>
        {trendingVideos.map(eachVideo => (
          <VideosCard key={eachVideo.id} videos={eachVideo} />
        ))}
      </TrendingVideoList>
    )
  }

  onRetry = () => {
    this.getTrendingVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

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
          const {activeTheme, changeTheme} = value
          const backgroundColor = activeTheme ? '#0f0f0f0f' : '#f9f9f9f9'
          const color = activeTheme ? '#f9f9f9' : '#231f20'

          return (
            <div data-testid="trending">
              <Header />
              <NavigationBar />
              <TrendingContainer
                data-testid="trending"
                backgroundColor={backgroundColor}
                onClick={changeTheme}
              >
                <TrendingVideoTitle>
                  <TrendingTitleIconContainer>
                    <HiFire size={35} color="#ff0000" />
                  </TrendingTitleIconContainer>
                  <TrendingText color={color}>Trending</TrendingText>
                </TrendingVideoTitle>
                {this.renderGamingVideosView()}
              </TrendingContainer>
            </div>
          )
        }}
      </ThemeChange.Consumer>
    )
  }
}

export default Trending
