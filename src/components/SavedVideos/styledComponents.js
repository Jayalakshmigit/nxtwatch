import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.backgroundColor};
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const SavedVideosTitle = styled.div`
  display: flex;
  align-items: center;
`

export const SavedVideosTitleIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 80px;

  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`
export const SavedVideosListItems = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
`

export const SavedVideosText = styled.h1`
  color: ${props => props.color};
  font-size: 25px;
  font-family: 'Roboto';

  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const NoSavedVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: none;
`

export const NoSavedVideosImage = styled.img`
  width: 200px;

  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const NoSavedVideosHeading = styled.h1`
  color: ${props => props.headingColor};
  font-size: 25px;
  font-family: 'Roboto';
  text-align: center;
`
export const NoSavedVideosNote = styled.p`
  color: ${props => props.noteColor};
  font-size: 18px;
  font-family: 'Roboto';
  text-align: center;
`
