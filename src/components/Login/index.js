import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  ImageEl,
  FormContainer,
  InputEl,
  LabelEl,
  CheckboxContainer,
  LoginButtonEl,
  AppContainer,
  InputContainer,
  Checkbox,
  ShowPassword,
  SubmitError,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showSubmitError: false,
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = event => {
    if (event.target.checked) {
      this.setState({showPassword: true})
    } else {
      this.setState({showPassword: false})
    }
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <>
        <LabelEl htmlFor="username">USERNAME</LabelEl>
        <InputEl
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPassword = () => {
    const {password, showPassword} = this.state
    const passwordType = showPassword ? 'text' : 'password'
    return (
      <>
        <LabelEl htmlFor="password">PASSWORD</LabelEl>
        <InputEl
          type={passwordType}
          id="password"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            id="checkbox"
            onChange={this.onShowPassword}
          />
          <ShowPassword htmlFor="checkbox">Show Password</ShowPassword>
        </CheckboxContainer>
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <AppContainer>
        <FormContainer onSubmit={this.onSubmitForm}>
          <ImageEl
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputContainer>{this.renderUsername()}</InputContainer>
          <InputContainer>{this.renderPassword()}</InputContainer>
          <LoginButtonEl type="submit">Login</LoginButtonEl>
          {showSubmitError && <SubmitError>*{errorMsg}</SubmitError>}
        </FormContainer>
      </AppContainer>
    )
  }
}

export default Login
