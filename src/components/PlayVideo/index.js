import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import ThemeChange from '../../context/ThemeChange'

import {
  VideoPlayer,
  PlayVideoTitle,
  PlayVideoStatus,
  PlayVideoStatusContainer,
  PlayVideoDot,
  PlaySocialButtonsContainer,
  SocialButton,
  ButtonText,
  HorizontalLine,
  ChannelImage,
  ChannelContainer,
  ChannelInfo,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
  ButtonContainer,
} from './StyledComponents'

const PlayVideo = props => {
  const {
    playVideoDetails,
    isLiked,
    isDisLiked,
    clickLiked,
    clickDisLiked,
  } = props

  const onClickLike = () => {
    clickLiked()
  }

  const onClickDisLike = () => {
    clickDisLiked()
  }

  return (
    <ThemeChange.Consumer>
      {value => {
        const {activeTheme, addSavedVideos, savedVideos} = value
        const textColor = activeTheme ? '#64748b' : '#231f20'

        let isSaved

        const index = savedVideos.findIndex(
          eachVideo => eachVideo.id === playVideoDetails.id,
        )
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const saveIconColor = isSaved ? '#2563eb' : textColor

        const onClickSave = () => {
          addSavedVideos(playVideoDetails)
        }

        return (
          <VideoPlayer>
            <ReactPlayer
              url={playVideoDetails.videoUrl}
              controls
              width="100%"
            />
            <PlayVideoTitle color={textColor}>
              {playVideoDetails.title}
            </PlayVideoTitle>
            <PlayVideoStatusContainer>
              <PlayVideoStatus color={textColor}>
                {playVideoDetails.viewCount} Views{' '}
                <PlayVideoDot> $#8226;</PlayVideoDot>
                {playVideoDetails.publishedAt}
              </PlayVideoStatus>
              <PlaySocialButtonsContainer>
                <ButtonContainer>
                  <SocialButton
                    type="button"
                    color={isLiked ? '#2563eb' : '#64748b'}
                    onClick={onClickLike}
                  >
                    <AiOutlineLike size={25} />
                    <ButtonText>Like</ButtonText>
                  </SocialButton>
                </ButtonContainer>
                <ButtonContainer>
                  <SocialButton
                    type="button"
                    color={isDisLiked ? '#2563eb' : '#64748b'}
                    onClick={onClickDisLike}
                  >
                    <AiOutlineDislike size={25} />
                    <ButtonText>Dislike</ButtonText>
                  </SocialButton>
                </ButtonContainer>
                <ButtonContainer>
                  <SocialButton
                    type="button"
                    color={saveIconColor}
                    onClick={onClickSave}
                  >
                    <BiListPlus size={25} />
                    <ButtonText> {isSaved ? 'Saved' : 'Save'}</ButtonText>
                  </SocialButton>
                </ButtonContainer>
              </PlaySocialButtonsContainer>
            </PlayVideoStatusContainer>

            <HorizontalLine />

            <ChannelContainer>
              <ChannelImage
                src={playVideoDetails.profileImageUrl}
                alt="channel logo"
              />
              <ChannelInfo>
                <ChannelName color={textColor}>
                  {playVideoDetails.name}
                </ChannelName>
                <ChannelSubscribers color={textColor}>
                  {playVideoDetails.subscriberCount} Subscribers
                </ChannelSubscribers>
                <ChannelDescription color={textColor}>
                  {playVideoDetails.description}
                </ChannelDescription>
              </ChannelInfo>
            </ChannelContainer>
          </VideoPlayer>
        )
      }}
    </ThemeChange.Consumer>
  )
}

export default PlayVideo
