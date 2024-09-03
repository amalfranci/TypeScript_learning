import React from 'react'


type PersonProbs = {
    name:{
        first:string
        lastname:string
    }
  
}

function Person( props:PersonProbs) {
  return (
    <div>
      { props.name.first} {props.name.lastname} hello this is from Person
    </div>
  )
}

export default Person
