import React from 'react'
import './Containers.scss'

type BigContainerBoxProps = {
  children: any
}
export const BigContainerBox = ({children}: BigContainerBoxProps) => {
  return (
    <div className="bigContainerBox-wrapper">
      <div className="bigContainerBox">
        {children}
      </div>
    </div>
  )
}
export default BigContainerBox;