import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import ThemeChange from '../../context/ThemeChange'
import GamingCard from '../GamingCard'
import NavigationBar from '../NavigationBar'

import FailureView from '../FailureView'

import './index.css'

import {
  GamingContainer,
  GamingHeadingIconContainer,
  GamingHeadingContainer,
  GamingListItems,
  GamingDescription,
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
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderGamingVideosView = () => {
    const {gamingVideos} = this.state
    return (
      <GamingListItems>
        {gamingVideos.map(eachVideo => (
          <GamingCard key={eachVideo.id} GamingCardVideoDetails={eachVideo} />
        ))}
      </GamingListItems>
    )
  }

  onRetry = () => {
    this.getGamingVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderGamingVideosView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideosView()
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
          const color = activeTheme ? '#f9f9f9' : '#231f20'

          return (
            <>
              <Header />
              <NavigationBar />
              <GamingContainer
                data-testid="gaming"
                backgroundColor={backgroundColor}
              >
                <GamingHeadingContainer>
                  <GamingHeadingIconContainer>
                    <SiYoutubegaming size={35} color="#ff0000" />
                  </GamingHeadingIconContainer>
                  <GamingDescription color={color}>Gaming</GamingDescription>
                </GamingHeadingContainer>
                {this.renderGamingVideosView()}
              </GamingContainer>
            </>
          )
        }}
      </ThemeChange.Consumer>
    )
  }
}

export default Gaming
