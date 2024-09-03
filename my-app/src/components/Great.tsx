import React from 'react'

type GreetProps = {
    name:string
    messageCount?:number 
    isLoggedIn : boolean 
}  

function Great(props :GreetProps) {
    const {messageCount = 0 } =props
  return (
    <div>
       {props.isLoggedIn ?  (`Welcome ${props.name} you have 10 unread messages ${messageCount}`) :("Welcome gust")}</div>
  )
}

export default Great