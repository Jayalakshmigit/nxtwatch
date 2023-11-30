import ThemeChange from '../../context/ThemeChange'

import {
  VideoCardContainer,
  ThumbnailImage,
  VideoCardBottomContainer,
  VideoCardDetailsContainer,
  VideoCardText,
  NavLink,
} from './styledComponents'

const VideoCard = props => {
  const {videoCardDetails} = props
  const {
    title,
    id,
    thumbnailUrl,
    viewCount,
    channel,
    publishedAt,
  } = videoCardDetails

  const {name} = channel

  return (
    <ThemeChange.Consumer>
      {value => {
        const {activeTheme} = value
        const backgroundColor = activeTheme ? '#231f20' : '#f9f9f9'
        const textColor = activeTheme ? '#f9f9f9' : ' #18181818'

        return (
          <NavLink to={`videos/${id}`} backgroundColor={backgroundColor}>
            <VideoCardContainer>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoCardBottomContainer>
                <VideoCardDetailsContainer>
                  <VideoCardText textColor={textColor} size={20}>
                    {title}
                  </VideoCardText>
                  <VideoCardText>{name}</VideoCardText>
                  <VideoCardText textColor={textColor} size={20}>
                    {viewCount} views
                  </VideoCardText>
                  <VideoCardText>{publishedAt}</VideoCardText>
                </VideoCardDetailsContainer>
              </VideoCardBottomContainer>
            </VideoCardContainer>
          </NavLink>
        )
      }}
    </ThemeChange.Consumer>
  )
}
export default VideoCard
