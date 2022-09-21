import React from 'react'

export default function Point({ x, y }) {
  return (
    <div className='point'
      style={{
        left: `${100 * x}%`,
        bottom: ` ${100 * y}%`
      }}
    ></div>
  )
}
