import React from 'react'

const SlideBtn = ({onClick, disableStatus, title}) => {
  return (
    <button
      type='button'
      className='arrow z-10 bg-black w-[50px] rounded-[50%] border'
      onClick={onClick}
      disabled={disableStatus}
    >
      {title}
    </button>
  )
}

export default SlideBtn
