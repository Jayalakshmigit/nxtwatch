import {
  GamingCardContainer,
  ThumbnailImage,
  GamingCardBottomContainer,
  GamingCardDetailsContainer,
  GamingCardText,
  NavLink,
} from './styledComponents'

const GamingCard = props => {
  const {gamingCardVideoDetails} = props
  const {title, id, thumbnailUrl, viewCount} = gamingCardVideoDetails
  return (
    <NavLink to={`videos/${id}`}>
      <GamingCardContainer>
        <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <GamingCardBottomContainer>
          <GamingCardDetailsContainer>
            <GamingCardText>{title}</GamingCardText>
            <GamingCardText>{viewCount} views</GamingCardText>
          </GamingCardDetailsContainer>
        </GamingCardBottomContainer>
      </GamingCardContainer>
    </NavLink>
  )
}

export default GamingCard
