import React from 'react'
import './Containers.scss'

type BigContainerBoxProps = {
  children: any
}
export const BigContainerBox = ({children}: BigContainerBoxProps) => {
  return (
    <div className="container-wrapper">
      <div className="bigContainerBox">
        {children}
      </div>
    </div>
  )
}
export default BigContainerBox;