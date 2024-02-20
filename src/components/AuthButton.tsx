import React from 'react'

type AuthButtonProps = {
	isLoggedIn: boolean
}

const AuthButton = ({ isLoggedIn }: AuthButtonProps) => {
	return (
		<button className="bg-[#f5d04f] text-black px-5 py-3 rounded-xl">
			{isLoggedIn ? 'Login' : 'SignUp'}
		</button>
	)
}

export default AuthButton
