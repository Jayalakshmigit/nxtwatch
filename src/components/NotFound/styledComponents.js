import styled from 'styled-components/macro'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.backgroundColor};
`
export const NotFoundImageEl = styled.img`
  width: 250px;
  margin: 10px;
`

export const NotFoundHeading = styled.h1`
  color: ${props => props.color};
  font-size: 30px;
  font-weight: 700;
  font-family: 'Roboto';
`
export const NotFoundParagraph = styled.p`
  color: ${props => props.color};
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
`
