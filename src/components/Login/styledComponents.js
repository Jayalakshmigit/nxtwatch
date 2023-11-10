import styled from 'styled-components/macro'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  max-width: 1110px;
  margin: auto;
  background-color: #ffffff;
`

export const WebsiteLogoContainer = styled.div`
  padding: 40px 20px;
  box-shadow: 0px 0px 20px 5px #c6c9cc;

  @media screen and (max-width: 767px) {
    width: 90%;
  }
`
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction === 'row' ? 'row' : 'column')};
  margin-top: 10px;
  align-self: center;
`
export const ImageEl = styled.img`
  width: 278px;
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 350px;
  background-color: transparent;
`
export const InputEl = styled.input`
  padding: 10px;
  outline: none;
`

export const LabelEl = styled.label`
  font-weight: bold;
  margin-bottom: 2px;
  cursor: ${props => props.cursor};
`
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction === 'row' ? 'row' : 'column')};
  margin-top: 10px;
  align-self: center;
`
export const LoginButtonEl = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #6366f1;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`
