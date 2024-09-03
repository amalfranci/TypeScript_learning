import React from 'react'

type PersonList = {

    names:{
        first:string
        last:string
    }[]
}

function PersonList(props:PersonList) {
  return (
    <div>{
        props.names.map(name=>{
            return (
                <h2>{name.first} {name.last}</h2>
            )

        })
        }</div>
  )
}

export default PersonList