import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: none;
`

export const FailureViewImage = styled.img`
  width: 200px;

  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const FailureViewHeading = styled.h1`
color = ${props => props.mainHeadingColor};
font-size:25px;
font-weight:900;
font-family:'Roboto';
text-align:center;
`
export const FailureViewParagraph = styled.p`
color = ${props => props.paragraphColor};
font-size:18px;
font-weight:700;
font-family:'Roboto';
text-align:center;
`
export const FailureViewRetryButton = styled.button`
  color: #ffffffff;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  background-color: #4f46e5;
  border-radius: 3px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`
