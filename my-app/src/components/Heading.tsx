import React from 'react'


type HeadingProps={
    children:React.ReactNode
}
function Heading({children}:HeadingProps){
  return (
    <div>{children}</div>
  )
}

export default Heading