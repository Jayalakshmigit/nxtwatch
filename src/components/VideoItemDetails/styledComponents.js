import styled from 'styled-components'

export const VideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: none;
`

export const VideosImage = styled.img`
  width: 200px;

  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const VideosHeading = styled.h1`
color = ${props => props.headingColor};
font-size:25px;
font-family:'Roboto';
`
export const VideosNote = styled.p`
color = ${props => props.color};
font-size:18px;
font-family:'Roboto';
`

export const RetryButton = styled.button`
  color: '#ffffff';
  font-size: 15px;
  font-family: 'Roboto';
  border-radius: 3px;
  background-color: #4f46e5;
  border: none;
  padding-left: 10px;
  padding-right: 10px;
  padding-right: 5px;
  padding-bottom: 5px;
`
export const VideoItemDetailsList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;

  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`
