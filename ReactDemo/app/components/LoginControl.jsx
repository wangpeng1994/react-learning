import React from 'react'
import Greeting from './Greeting.jsx'
import LoginAndLogoutButton from './LoginAndLogoutButton.jsx'


class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = {isLoggedIn: false}
  }
  componentDidMount() {
    let Data = JSON.parse(window.localStorage.getItem('isLoggedIn'))
    if(Data === true) {
      this.setState({isLoggedIn: true})
    }
  }
  handleLoginClick() {
    window.localStorage.setItem('isLoggedIn', 'true')
    this.setState({isLoggedIn: true})
  }
  handleLogoutClick() {
    window.localStorage.setItem('isLoggedIn', 'false')
    this.setState({isLoggedIn: false})
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn
    
    let button = null
    if(isLoggedIn) {
      button = (
        <LoginAndLogoutButton onClick={this.handleLogoutClick}>
          注销
        </LoginAndLogoutButton>
      )  
    } else {
      button = (
        <LoginAndLogoutButton onClick={this.handleLoginClick}>
          登录
        </LoginAndLogoutButton>
      )
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}

export default LoginControl