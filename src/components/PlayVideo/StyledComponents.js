import styled from 'styled-components'

export const VideoPlayer = styled.div`
  padding: 20px;
`
export const PlayVideoTitle = styled.p`
  color: ${props => props.color};
  font-size: 25px;
  font-family: 'Roboto';
`
export const PlayVideoStatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const PlayVideoStatus = styled.p`
  color: ${props => props.color};
  font-size: 12px;
  font-family: 'Roboto';
`

export const PlayVideoDot = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`

export const PlaySocialButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const SocialButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: none;
  border: none;
  color: ${props => props.color};
  margin-right: 10px;
`

export const ButtonText = styled.span`
  color: #2563eb;
  margin-left: 5px;

  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const HorizontalLine = styled.hr`
  border: 1px solid #909090;
`
export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`

export const ChannelImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  margin-right: 20px;
`
export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelName = styled.p`
  color: ${props => props.color};
  font-size: 15px;
  font-family: 'Roboto';
  margin: 0px;
`
export const ChannelSubscribers = styled.p`
  color: ${props => props.color};
  font-size: 12px;
  font-family: 'Roboto';
`
export const ChannelDescription = styled.p`
  color: ${props => props.color};
  font-size: 15px;
  font-family: 'Roboto';
`

export const ButtonContainer = styled.div`
  display: flex;
  background-color: none;
`
