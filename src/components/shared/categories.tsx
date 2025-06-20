import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react";
import { Text } from "./text"

interface Props {
	className?: string;
}

const cats = [
	{ id: 0, name: "Всё" },
	{ id: 1, name: "Чокеры" },
	{ id: 2, name: "Цепи" },
	{ id: 3, name: "Каффы" },
	{ id: 4, name: "Колье" },
	{ id: 5, name: "Кольца" },
	{ id: 6, name: "Браслеты" },
];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn("inline-flex gap-1 bg-[#F0F0F0] p-1 h-10 rounded-full", className)}>
			{cats.map(({name, id}, index) => (
				<Link className={cn(
					"flex items-center h-full rounded-full px-5",
					activeIndex === id && "bg-black text-white"
				)} key={index} href={""}>
					<Text text={name} />
				</Link>
			))}
		</div>
	);
};