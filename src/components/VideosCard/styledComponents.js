import styled from 'styled-components/macro'

export const VideoCardListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-self: centre;
  width: 100%;
  background-color: none;

  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }
`
export const ThumbnailImage = styled.img`
  width: 100%;
`

export const VideoCardDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  margin: 20px;
`

export const VideoCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`

export const VideoCardHeading = styled.p`
  color: ${props => props.color};
  font-size: 15px;
  font-family: 'Roboto';
`

export const VideoCardChannelName = styled.p`
  color: ${props => props.color};
  font-size: 13px;
  font-family: 'Roboto';
`
export const VideoCardViewsAndDate = styled.p`
  color: ${props => props.color};
  font-size: 12px;
  font-family: 'Roboto';
`
export const Dot = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
