import {Link} from 'react-router-dom'
import ThemeChange from '../../context/ThemeChange'

import './index.css'

import {
  VideoCardListItem,
  ThumbnailImage,
  VideoCardDetails,
  ProfileImage,
  VideoCardContent,
  VideoCardHeading,
  VideoCardChannelName,
  VideoCardViewsAndDate,
  Dot,
} from './styledComponents'

const VideosCard = props => {
  const {videos} = props
  const {
    id,
    title,
    thumbnailUrl,
    profileImageUrl,
    publishedAt,
    name,
    viewCount,
  } = videos

  return (
    <ThemeChange.Consumer>
      {value => {
        const {activeTheme} = value
        const color = activeTheme ? '#f9f9f9' : '#231f20'
        return (
          <Link to={`/videos/${id}`} className="link">
            <VideoCardListItem>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoCardDetails>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <VideoCardContent>
                  <VideoCardHeading color={color}>{title}</VideoCardHeading>
                  <VideoCardChannelName color={color}>
                    {name}
                  </VideoCardChannelName>
                  <VideoCardViewsAndDate color={color}>
                    {viewCount} views <Dot>&#8226;</Dot>
                    {publishedAt}{' '}
                  </VideoCardViewsAndDate>
                </VideoCardContent>
              </VideoCardDetails>
            </VideoCardListItem>
          </Link>
        )
      }}
    </ThemeChange.Consumer>
  )
}

export default VideosCard
