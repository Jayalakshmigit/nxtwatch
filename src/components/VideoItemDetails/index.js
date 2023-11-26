import ThemeChange from '../../context/ThemeChange'
import VideosCard from '../VideosCard'

import {
  VideosView,
  VideosImage,
  VideosHeading,
  VideosNote,
  RetryButton,
  VideoItemDetailsList,
} from './styledComponents'

const VideoItemDetails = props => {
  const {videosDetails, onRetry} = props
  const videosCount = videosDetails.length

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeChange.Consumer>
      {value => {
        const {activeTheme} = value
        const headingColor = activeTheme ? '#f1f5f9' : '#1e293b'
        const color = activeTheme ? '#e2e8f0' : '#475569'

        return videosCount > 0 ? (
          <VideoItemDetailsList>
            {videosDetails.map(eachVideo => (
              <VideosCard key={eachVideo.id} videos={eachVideo} />
            ))}
          </VideoItemDetailsList>
        ) : (
          <VideosView>
            <VideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
              alt="no videos"
            />
            <VideosHeading headingColor={headingColor}>
              No Search results found
            </VideosHeading>
            <VideosNote color={color}>
              Try different keywords or remove search filter
            </VideosNote>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </VideosView>
        )
      }}
    </ThemeChange.Consumer>
  )
}

export default VideoItemDetails
