'use client'

import React, { useState } from 'react'
import { useId } from 'react'
import Link from 'next/link'
import AuthButton from './AuthButton'
import { usePathname } from 'next/navigation'
import { isCurrentPage } from '@/helper/helper'
import cartIcon from '@/../public/Cart.svg'
import searchIcon from '@/../public/Search.svg'
import Image from 'next/image'

const Navbar = () => {
	const search = usePathname()

	const id = useId()
	const navBarList = [
		{
			name: 'Books',
			link: '/books'
		},
		{
			name: 'Combos',
			link: '/combo'
		},
		{
			name: 'Authors',
			link: '/authors'
		},
		{
			name: 'About Us',
			link: '/about'
		}
	]
	const icons = [
		{
			name: 'cart',
			icon: cartIcon
		},
		{
			name: 'search',
			icon: searchIcon
		}
	]

	return (
		<section className="p-6">
			<div className="border border-3 border-[#262626] rounded-2xl max-w-screen p-5 flex justify-between bg-[#262626]">
				<div className="flex justify-center items-center">
					<Link href={'/'}>
						<h1 className="text-3xl text-[#f2f2f2]">Maexstores</h1>
					</Link>
				</div>
				<div className="flex justify-center items-center">
					<ul className="flex justify-center">
						{navBarList.map((item) => (
							<li
								className={`font-thin px-4 ${
									isCurrentPage(search, item.link)
										? 'text-[#F4D867]'
										: 'text-[#FFFFFF]'
								}`}
								key={id}
							>
								<Link href={item.link}>{item.name}</Link>
							</li>
						))}
					</ul>
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
										width={20}
										height={20}
									/>
								</button>
							))}
						</div>
						<AuthButton isLoggedIn={false} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Navbar
