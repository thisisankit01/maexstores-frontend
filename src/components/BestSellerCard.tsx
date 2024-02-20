import React from 'react'
import Image from 'next/image'
import BookCardButton from './BookCardButton'

type BestSellerCardProps = {
	image: string
	name: string
	author: string
	price: number
}

const BestSellerCard = ({
	image,
	name,
	author,
	price
}: BestSellerCardProps) => {
	return (
		<section className="bg-white rounded-2xl">
			<div className="flex p-3 space-x-4">
				<div className="relative w-3/10">
					<Image
						className="object-cover rounded-2xl"
						width={150}
						height={150}
						src={image}
						alt={'book cover'}
					/>
				</div>
				<div className="flex flex-col justify-between">
					<div>
						<h1 className="text-base font-extralight">{author}</h1>
						<h1 className="text-base font-medium">{name}</h1>
					</div>
					<div className="flex items-center">
						<h1 className="text-lg text-slate-500 line-through mr-2">
							₹{(price * 1.1).toFixed(2)}
						</h1>
						<h1 className="text-lg font-bold">
							₹{price.toFixed(2)}
						</h1>
					</div>
					<div>
						<BookCardButton
							buttonClass="rounded-3xl"
							text="Buy Now"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BestSellerCard
