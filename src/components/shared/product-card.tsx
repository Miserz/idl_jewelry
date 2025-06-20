import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Text } from "./text"
import { cn } from "@/lib/utils"

interface Props {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
	className?: string;	
}

export const ProductCard: React.FC<Props> = ({ id, name, price, imageUrl, className }) => {
	return (
		<Link className={cn("flex flex-col gap-2 p-4 rounded-3xl hover:shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] transition-shadow duration-300 ease-in-out", className)} href={`/product/${id}`}>
			<Image className="w-full rounded-[.5rem]" width={244} height={244} src={imageUrl} alt={name} />
			<Text text={name} size="p1" />
			<Text text={`${price}₽`} size="subtitle" weight="bold" />
		</Link>
	);
}