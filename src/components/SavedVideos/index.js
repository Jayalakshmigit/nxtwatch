import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import VideosCard from '../VideosCard'

import ThemeChange from '../../context/ThemeChange'

import {
  SavedVideosContainer,
  SavedVideosTitleIconContainer,
  SavedVideosTitle,
  SavedVideosListItems,
  SavedVideosText,
  NoSavedVideosView,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosNote,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeChange.Consumer>
    {value => {
      const {activeTheme, savedVideos} = value
      const backgroundColor = activeTheme ? '#0f0f0f0f' : '#f9f9f9'
      const textColor = activeTheme ? '#f9f9f9' : '#231f20'
      const headingColor = activeTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = activeTheme ? '#e2e8f0' : '#475569'

      return (
        <>
          <Header />
          <NavigationBar />
          <SavedVideosContainer
            data-testid="savedVideos"
            backgroundColor={backgroundColor}
          >
            <SavedVideosTitle>
              <SavedVideosTitleIconContainer>
                <CgPlayListAdd size={35} color="#ff0000" />
              </SavedVideosTitleIconContainer>
              <SavedVideosText color={textColor}>Saved Videos</SavedVideosText>
            </SavedVideosTitle>
            {savedVideos.length > 0 ? (
              <SavedVideosListItems>
                {SavedVideos.map(eachVideo => (
                  <VideosCard key={eachVideo.id} videos={eachVideo} />
                ))}
              </SavedVideosListItems>
            ) : (
              <NoSavedVideosView>
                <NoSavedVideosImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />

                <NoSavedVideosHeading headingColor={headingColor}>
                  No saved videos found
                </NoSavedVideosHeading>
                <NoSavedVideosNote noteColor={noteColor}>
                  You can save your videos while watching them
                </NoSavedVideosNote>
              </NoSavedVideosView>
            )}
          </SavedVideosContainer>
        </>
      )
    }}
  </ThemeChange.Consumer>
)

export default SavedVideos
