import ThemeChange from '../../context/ThemeChange'

import {
  NotFoundContainer,
  NotFoundImageEl,
  NotFoundHeading,
  NotFoundParagraph,
} from './styledComponents'

const NotFound = () => (
  <ThemeChange.Consumer>
    {value => {
      const {activeTheme} = value
      const backgroundColor = activeTheme ? '#ffffff' : '#000000'
      const color = activeTheme ? '#000000' : '#ffffff'
      const NotFoundImage = activeTheme
        ? '"https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <NotFoundContainer backgroundColor={backgroundColor}>
          <NotFoundImageEl src={NotFoundImage} alt="not found" />
          <NotFoundHeading color={color}>Page Not Found</NotFoundHeading>
          <NotFoundParagraph color={color}>
            We are sorry, the page you requested could not be found.
          </NotFoundParagraph>
        </NotFoundContainer>
      )
    }}
  </ThemeChange.Consumer>
)

export default NotFound
