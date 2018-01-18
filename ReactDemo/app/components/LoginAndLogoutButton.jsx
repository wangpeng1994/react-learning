import React from 'react'

function LoginAndLogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default LoginAndLogoutButton