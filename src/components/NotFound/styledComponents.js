import styled from 'styled-components/macro'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};

  @media screen and (max-width: 767px) {
    height: 100vh;
    padding: 20px 20px;
    padding-bottom: 0;
    overflow: hidden;
  }
`
export const NotFoundImageEl = styled.img`
  width: 90%;

  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const NotFoundHeading = styled.h1`
  color: #1e293b;
  font-size: 25px;
  font-weight: 700;
  font-family: 'Roboto';
`
export const NotFoundParagraph = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
`
