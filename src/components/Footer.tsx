'use client'

import React from 'react'
import { useId } from 'react'
import cartIcon from '@/../public/Cart.svg'
import searchIcon from '@/../public/Search.svg'
import Image from 'next/image'
import twitterIcon from '@/../public/twitter.svg'
import facebookIcon from '@/../public/fb.svg'
import instagramIcon from '@/../public/insta.svg'

const Footer = () => {
	const id = useId()
	const icons = [
		{
			name: 'twitter',
			icon: twitterIcon
		},
		{
			name: 'facebook',
			icon: facebookIcon
		},
		{
			name: 'instagram',
			icon: instagramIcon
		}
	]

	return (
		<section className="">
			<div className="">
				<div className="border border-3 border-[#262626] max-w-screen p-5 flex justify-between bg-[#262626]">
					<div className="flex justify-center items-center">
						<h1 className="text-3xl text-[#f2f2f2]">MaeXstores</h1>
					</div>
					<div className="flex justify-center items-center">
						<div className="flex justify-between space-x-8">
							<div className="flex space-x-3 ">
								{icons.map((item) => (
									<button
										className="flex justify-center items-center"
										key={id}
									>
										<Image
											src={item.icon}
											alt={item.name}
											width={30}
											height={30}
										/>
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Footer
