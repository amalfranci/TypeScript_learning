import React from 'react'

type StatusProps = {

    status : 'loading'|'success'|'error'
}

function Status(props:StatusProps) {

    let message 
    if(props.status === 'loading'){
        message = "LOADING...."
    }else if(props.status ==='success')
    {
        message = "SUCCESS..." 
    }
    else if(props.status ==='error')
    {
        message ='Error fetching data'
    }
  return (
    <div>
        <h2>{message}</h2>
    </div>
  )
}

export default Status
