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
      const backgroundColor = activeTheme === 'light' ? '#ffffff' : '#000000'
      const color = activeTheme === 'light' ? '#000000' : '#ffffff'

      return (
        <NotFoundContainer backgroundColor={backgroundColor} color={color}>
          {activeTheme === 'light' ? (
            <>
              <NotFoundImageEl src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png" />
            </>
          ) : (
            <>
              <NotFoundImageEl src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png" />
            </>
          )}

          <NotFoundHeading>Page Not Found</NotFoundHeading>
          <NotFoundParagraph>
            We are sorry, the page you requested could not be found.
          </NotFoundParagraph>
        </NotFoundContainer>
      )
    }}
  </ThemeChange.Consumer>
)

export default NotFound
