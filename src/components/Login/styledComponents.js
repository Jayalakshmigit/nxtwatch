import styled from 'styled-components/macro'

export const AppContainer = styled.div`
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

export const LabelEl = styled.label`
  color: #475569;
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 500;
  padding: 8px;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  margin-top: 5px;
`
export const InputEl = styled.input`
  color: #475569;
  font-size: 15px;
  font-family: 'Roboto';
  outline: none;
  padding: 8px;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  margin-top: 5px;
  font-weight: 500;
`

export const ImageEl = styled.img`
  align-self: center;
  width: 180px;
  margin-bottom: 15px;
`
export const Checkbox = styled.div`
  height: 15px;
  width: 15px;
  margin-right: 5px;
`
export const ShowPassword = styled.label`
  color: #1e293b;
  font-size: 15px;
  font-family: 'Roboto';
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
export const InputContainer = styled.div`
  width: 100%;
  margin-top: 15px;
`

export const CheckboxContainer = styled.div`
  display: flex;
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
  background-color: #4f46e5;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const SubmitError = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`
