import {Component} from 'react'
import {Cookies} from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeChange from '../../context/ThemeChange'
import VideoItemDetails from '../VideoItemDetails'
import FailureView from '../FailureView'

import './index.css'

import {
  HomeContainer,
  BannerContainer,
  BannerHeading,
  BannerButton,
  BannerLeftPart,
  BannerRightPart,
  BannerCloseButton,
  SearchContainer,
  SearchInput,
  SearchIconContainer,
  BannerImage,
} from './styledComponents'

const apiStatusConsonants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    homeVideos: [],
    searchInput: '',
    apiStatus: apiStatusConsonants.initial,
    bannerDisplay: 'flex',
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConsonants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.name,
        profileImageUrl: eachVideo.profile_image_url,
      }))

      this.setState({
        homeVideos: updatedData,
        apiStatus: apiStatusConsonants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConsonants.failure})
    }
  }

  onCloseBanner = () => {
    this.setState({bannerDisplay: 'none'})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchResultsView = () => {
    this.getHomeVideos()
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getHomeVideos)
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderHomeVideosView = () => {
    const {homeVideos} = this.state
    return (
      <VideoItemDetails homeVideosDetails={homeVideos} onRetry={this.onRetry} />
    )
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderHomeVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConsonants.success:
        return this.renderHomeVideosView()
      case apiStatusConsonants.failure:
        return this.renderFailureView()
      case apiStatusConsonants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {searchInput, bannerDisplay} = this.state
    return (
      <ThemeChange.Consumer>
        {value => {
          const {activeTheme} = value
          const backgroundColor = activeTheme ? '#181818' : '#f9f9f9'
          const color = activeTheme ? '#f9f9f9' : '#231f20'
          const display = bannerDisplay === 'flex' ? 'flex' : 'none'

          return (
            <>
              <Header />
              <NavigationBar />
              <HomeContainer
                data-testid="home"
                backgroundColor={backgroundColor}
              >
                <BannerContainer data-testid="banner" display={display}>
                  <BannerLeftPart>
                    <BannerImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <BannerHeading>
                      Buy Nxt Watch Premium prepaid plans with <br /> UPI
                    </BannerHeading>
                    <BannerButton type="button"> GET IT NOW</BannerButton>
                  </BannerLeftPart>
                  <BannerRightPart>
                    <BannerCloseButton
                      data-testid="close"
                      onClick={this.onCloseBanner}
                    >
                      <AiOutlineClose size={25} />
                    </BannerCloseButton>
                  </BannerRightPart>
                </BannerContainer>

                <SearchContainer>
                  <SearchInput
                    type="search"
                    placeholder="Search"
                    value={searchInput}
                    onChange={this.onChangeSearchInput}
                    color={color}
                  />
                  <SearchIconContainer
                    data-testid="searchButton"
                    onClick={this.getSearchResultsView}
                  >
                    <AiOutlineSearch size={20} />
                  </SearchIconContainer>
                </SearchContainer>
                {this.renderHomeVideos()}
              </HomeContainer>
            </>
          )
        }}
      </ThemeChange.Consumer>
    )
  }
}

export default Home
