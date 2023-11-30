import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'

import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai'

import {RiPlayListAddFill} from 'react-icons/ri'
import Header from '../Header'
import SideBar from '../SideBar'

import ThemeChange from '../../context/ThemeChange'

import {
  HomeContainer,
  LoaderContainer,
  VideoItemDetailsSideContainer,
  VideoItemDetailsTitle,
  VideoItemTextContainer,
  ViewDetailsContainer,
  LikesContainer,
  ViewsText,
  IconContainer,
  HorizontalLine,
  ChannelLogo,
  ChannelContainer,
  ChannelDetailsContainer,
  LogoContainer,
  NotFoundContainer,
  Image,
  Desc,
  Heading,
  NavLink,
  Retry,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoItemDetails: [],
    isVideoSaved: false,
    isLiked: false,
    isDisliked: false,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
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
          subscriberCount: eachVideo.channel.subscriber_count,
        },

        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.views_count,
        publishedAt: eachVideo.published_at,
        description: eachVideo.description,
      }))
      this.setState({
        videoItemDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSpecificVideoItemDetails = () => (
    <ThemeChange.Consumer>
      {value => {
        const {videoItemDetails, isVideoSaved, isLiked, isDisliked} = this.state
        const {
          id,
          channel,
          description,
          viewCount,
          videoUrl,
          title,
          publishedAt,
          videoSaved,
        } = videoItemDetails

        const {name, profileImageUrl, subscriberCount} = channel
        const {addToSaveVideos, removeSaveVideos} = value

        const addOrRemoveVideo = () => {
          if (isVideoSaved === true) {
            removeSaveVideos(id)
          } else {
            addToSaveVideos({...videoItemDetails, videoSaved: true})
          }
        }

        const saveVideoToList = () => {
          this.setState(
            prevState => ({isVideoSaved: !prevState.isVideoSaved}),
            addOrRemoveVideo,
          )
        }

        const onClickLikeButton = () => {
          this.setState(prevState => ({
            isLiked: !prevState.isLiked,
            isDisliked: false,
          }))
        }

        const onClickDislikeButton = () => {
          this.setState(prevState => ({
            isDisliked: !prevState.isDisliked,
            isLiked: false,
          }))
        }

        const likeVideos = isLiked ? '#2563eb' : '#64748b'
        const dislikeVideos = isDisliked ? '#2563eb' : '#64748b'

        const likeIcon = isLiked ? (
          <AiFillLike size={25} />
        ) : (
          <AiOutlineLike size={25} />
        )

        const dislikeIcon = isDisliked ? (
          <AiFillDislike size={25} />
        ) : (
          <AiOutlineDislike size={25} />
        )

        return (
          <div data-testid="videoItemDetails">
            <Header />
            <HomeContainer>
              <SideBar />

              <VideoItemDetailsSideContainer>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="90%"
                  height="500px"
                />

                <VideoItemTextContainer>
                  <VideoItemDetailsTitle>{title}</VideoItemDetailsTitle>
                  <ViewDetailsContainer>
                    <ViewsText>{viewCount}</ViewsText>
                    <ViewsText>{publishedAt}</ViewsText>

                    <LikesContainer>
                      <IconContainer
                        type="button"
                        color={likeVideos}
                        onClick={onClickLikeButton}
                      >
                        {likeIcon}
                        <ViewsText color={likeVideos}>Like</ViewsText>
                      </IconContainer>

                      <IconContainer
                        type="button"
                        color={dislikeVideos}
                        onClick={onClickDislikeButton}
                      >
                        {dislikeIcon}
                        <ViewsText color={dislikeVideos}>Dislike</ViewsText>
                      </IconContainer>

                      <IconContainer
                        onClick={saveVideoToList}
                        color={videoSaved ? '#4f46e5' : '#18181818'}
                      >
                        <RiPlayListAddFill size={25} />
                        <ViewsText color={videoSaved ? '#4f46e5' : '#18181818'}>
                          {isVideoSaved ? 'Saved' : 'Save'}
                        </ViewsText>
                      </IconContainer>
                    </LikesContainer>
                  </ViewDetailsContainer>

                  <HorizontalLine />

                  <ChannelContainer>
                    <LogoContainer>
                      <ChannelLogo src={profileImageUrl} alt="channel logo" />
                    </LogoContainer>

                    <ChannelDetailsContainer>
                      <ViewsText>{name}</ViewsText>
                      <ViewsText>{subscriberCount}</ViewsText>
                      <ViewsText>{description}</ViewsText>
                    </ChannelDetailsContainer>
                  </ChannelContainer>
                </VideoItemTextContainer>
              </VideoItemDetailsSideContainer>
            </HomeContainer>
          </div>
        )
      }}
    </ThemeChange.Consumer>
  )

  renderLoadingView = () => (
    <LoaderContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </div>
    </LoaderContainer>
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
        <Retry
          className="button"
          type="button"
          onClick={this.getSuggestionVideos}
        >
          Retry
        </Retry>
      </NavLink>
    </NotFoundContainer>
  )

  renderVideoItemDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSpecificVideoItemDetails()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return <> {this.renderVideoItemDetails()}</>
  }
}

export default VideoItemDetails
