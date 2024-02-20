import React from 'react'

export type CardButtonProps = {
    buttonClass : string
    text : string
}

const CardButton = ({buttonClass , text} : CardButtonProps) => {
  return (
    <button className={`border-2 border-[#F4CE47] text-[#F4CE47] px-5 py-3 rounded-xl ${buttonClass}`}>{text}</button>
  )
}

export default CardButton