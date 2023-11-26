import {
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewParagraph,
  FailureViewRetryButton,
} from './styledComponents'

import ThemeChange from '../../context/ThemeChange'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeChange.Consumer>
      {value => {
        const {activeTheme} = value
        const mainHeadingColor = activeTheme ? '#f1f5f9' : '#1e293b'
        const paragraphColor = activeTheme ? '#e2e8f0' : '#475569'

        const failureViewImage = activeTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureViewContainer>
            <FailureViewImage src={FailureViewImage} alt="failure view" />
            <FailureViewHeading mainHeadingColor={mainHeadingColor}>
              {' '}
              Oops! Something Went Wrong
            </FailureViewHeading>
            <FailureViewParagraph paragraphColor={paragraphColor}>
              {failureViewImage}
              We are having some trouble to complete your request. <br />
              Please try again later.
            </FailureViewParagraph>
            <FailureViewRetryButton type="button" onClick={onClickRetry}>
              Retry
            </FailureViewRetryButton>
          </FailureViewContainer>
        )
      }}
    </ThemeChange.Consumer>
  )
}

export default FailureView
