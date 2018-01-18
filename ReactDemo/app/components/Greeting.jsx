import React from 'react'

function Greeting(props){
  const isLoggedIn = props.isLoggedIn
  if(isLoggedIn){
    return (
      <h1>登录成功，我是一个简单的页面！</h1>
    )
  }
  return (
    <h1>朋友，请你登录！</h1>
  )
}

export default Greeting