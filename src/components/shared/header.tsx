'use client'

import { cn } from '@/lib/utils'
import { Heart, ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '../ui'
import { Container } from './container'

interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	const [active, setActive] = useState(false)
	return (
		<header
			className={cn(active ? 'sticky top-0 py-2 mb-8 z-99 bg-white' : 'sticky top-0 py-6 mb-8 z-99', className)}
		>
			<Container
				className={
					active
						? 'flex items-center justify-between'
						: 'flex items-center justify-between p-1 border border-black/10 rounded-full bg-background/60 backdrop-blur-2xl'
				}
			>
				{/* Логотип */}
				<div className='flex justify-start w-full'>
					<Image
						className='ml-3'
						src='/logo.svg'
						alt='Logo'
						width={191}
						height={27}
					/>
				</div>

				{/* Навигация */}
				<nav className='flex gap-10 w-full justify-center'>
					<Link
						className="font-medium relative overflow-hidden after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
						href='/'
					>
						Главная
					</Link>
					<Link
						className="font-medium relative overflow-hidden after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
						href='/catalog'
					>
						Каталог
					</Link>
					<Link
						className="font-medium relative overflow-hidden after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
						href='#'
					>
						О нас
					</Link>
				</nav>

				{/* Кнопки */}
				<div className='flex justify-end gap-3 w-full'>
					<Button className='size-10' variant='ghost' size='icon'>
						<Heart className='size-6' />
					</Button>
					<Button className='size-10' variant='ghost' size='icon'>
						<ShoppingCart className='size-6' />
					</Button>
					<Button
						onClick={() => setActive(v => !v)}
						className='size-10'
						variant='ghost'
						size='icon'
					>
						<User className='size-6' />
					</Button>
				</div>
			</Container>
		</header>
	)
}
