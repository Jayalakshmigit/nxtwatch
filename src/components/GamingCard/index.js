import ThemeChange from '../../context/ThemeChange'

import {
  GamingCardItemLink,
  GamingCardListItem,
  GamingCardThumbnailImage,
  GamingCardContent,
  GamingCardHeading,
  GamingCardViewsAndDate,
} from './styledComponents'

const GamingCard = props => {
  const {GamingCardVideoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = GamingCardVideoDetails

  return (
    <ThemeChange.Consumer>
      {value => {
        const {activeTheme} = value
        const gamingCardHeadingColor = activeTheme ? '#f9f9f9' : '#231f20'

        return (
          <GamingCardItemLink to={`/videos/${id}`} className="link">
            <GamingCardListItem>
              <GamingCardThumbnailImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <GamingCardContent>
                <GamingCardHeading color={gamingCardHeadingColor}>
                  {title}
                </GamingCardHeading>
                <GamingCardViewsAndDate color={gamingCardHeadingColor}>
                  {viewCount} Watching WorldWide
                </GamingCardViewsAndDate>
              </GamingCardContent>
            </GamingCardListItem>
          </GamingCardItemLink>
        )
      }}
    </ThemeChange.Consumer>
  )
}

export default GamingCard
