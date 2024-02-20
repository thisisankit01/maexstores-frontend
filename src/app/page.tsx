import React from 'react'
import Navbar from '@/components/Navbar'
import CardButton from '@/components/CardButton'
import downArrow from '@/../public/downArrow.svg'
import Image from 'next/image'
import { bookDetails } from '@/helper/dummyBooks'
import BestSellerCard from '@/components/BestSellerCard'
import { useId } from 'react'
import Footer from '@/components/Footer'

const Home = () => {
	const id = useId()
	return (
		<>
			<section className="px-6">
				{/* <h1 className='text-center shadow-sm text-7xl font-bold'>READING MAKES A HUGE DIFFERENCE</h1> */}
				<div className="py-2">
					<div className="grid grid-cols-2 border-[1px] border-black rounded-2xl bg-[#262626]">
						<div className="py-8 px-12">
							<h1 className="text-left text-5xl font-bold text-white py-2">
								Our Mission
							</h1>
							<p className="text-left text-3xl font-thin text-white py-3">
								We are committed to providing our customers with
								the best books and services.
							</p>
							<div className="pt-7">
								<CardButton
									text={'BROWSE NOW'}
									buttonClass="bg-[#262626]"
								/>
							</div>
						</div>
						{/* <div className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden">
							<Image
								src={searchIcon}
								alt="search"
								layout="fill"
								objectFit="cover"
							/>
						</div> */}
					</div>
				</div>
			</section>
			<section className="py-6">
				<div className="py-2 bg-[#262626]">
					<h1 className="text-white px-10 font-bold py-10 text-2xl">
						BESTSELLERS
					</h1>
					<div className="py-8 px-10">
						<div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1 max-lg:grid-cols-2">
							{bookDetails.map((book) => (
								<BestSellerCard
									key={id}
									author={book.author_name}
									name={book.name}
									price={book.price}
									image={book.image_url}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
			<section className="px-6">
				<div className="py-2">
					<div className="flex justify-between border-[1px] border-black rounded-2xl bg-[#262626]">
						<div className="py-8 px-12 ">
							<h1 className="text-left text-3xl font-bold text-white py-2">
								DECIDING WHAT TO READ NEXT?
							</h1>
							<p className="text-left text-xl font-thin text-white py-3">
								You're in the right place. Tell us what titles
								or genres you've enjoyed in the past, and we'll
								give you surprisingly insightful
								recommendations.
							</p>
						</div>
						<div className="flex items-center justify-center p-8 mx-8 my-8 rounded-2xl max-w-full max-h-full bg-yellow-500">
							<Image alt="downArrow" src={downArrow} />
						</div>
					</div>
				</div>
			</section>
			<section className="py-4 px-10">
				<div className="grid grid-cols-3 gap-4">
					<div className="flex flex-col justify-center items-center border-[1px] border-black rounded-2xl bg-[#262626] max-lg:grid max-lg:grid-cols-1">
						<p className="text-3xl text-white font-bold py-12">
							DISCOUNTS
						</p>
					</div>
					<div className="flex col-span-2 flex-col justify-center items-center border-[1px] border-black rounded-2xl bg-[#262626]">
						<p className="text-3xl text-white font-bold py-16">
							THE BEST BOOKS FOR A GIFT
						</p>
					</div>
				</div>
			</section>
		</>
	)
}

export default Home
