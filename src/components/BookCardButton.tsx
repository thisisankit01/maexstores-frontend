import React from 'react'

export type CardButtonProps = {
	buttonClass: string
	text: string
}

const BookCardButton = ({ buttonClass, text }: CardButtonProps) => {
	return (
		<button
			className={`border-2 border-black text-black px-5 py-3 ${buttonClass}`}
		>
			{text}
		</button>
	)
}

export default BookCardButton
