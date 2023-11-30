import ThemeChange from '../../context/ThemeChange'

import {
  VideoItemsContainer,
  ThumbnailImage,
  VideoItemsBottomContainer,
  VideoItemsDetailsContainer,
  VideoItemsText,
  NavLink,
  ProfileImage,
} from './styledComponents'

const VideoItems = props => {
  const {videoItemsDetails} = props
  const {
    title,
    id,
    thumbnailUrl,
    viewCount,
    channel,
    publishedAt,
  } = videoItemsDetails

  const {name, profileImageUrl} = channel

  return (
    <ThemeChange.Consumer>
      {value => {
        const {activeTheme} = value
        const backgroundColor = activeTheme ? '#231f20' : '#f9f9f9'
        const textColor = activeTheme ? '#f9f9f9' : ' #18181818'

        return (
          <NavLink to={`videos/${id}`}>
            <VideoItemsContainer backgroundColor={backgroundColor}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoItemsBottomContainer>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <VideoItemsDetailsContainer>
                  <VideoItemsText textColor={textColor} size={20}>
                    {title}
                  </VideoItemsText>
                  <VideoItemsText>{name}</VideoItemsText>
                  <VideoItemsText textColor={textColor} size={20}>
                    {viewCount} views
                  </VideoItemsText>
                  <VideoItems>{publishedAt}</VideoItems>
                </VideoItemsDetailsContainer>
              </VideoItemsBottomContainer>
            </VideoItemsContainer>
          </NavLink>
        )
      }}
    </ThemeChange.Consumer>
  )
}
export default VideoItems
