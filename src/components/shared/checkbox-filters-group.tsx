/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { cn } from "@/lib/utils"
import React from 'react'
import { Input } from "../ui"
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox"
import { Text } from "./text"

type Item = FilterCheckboxProps;

interface Props {
	title: string;
	items: Item[];
	defaultItems: Item[];
	limit?: number;
	searchInputPlaceholder?: string;
	onChange?: (values: string[]) => void;
	defaultValue?: string[];
 	className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
	title,
	items,
	defaultItems,
	limit = 5,
	searchInputPlaceholder = "Поиск...",
	className,
	onChange,
	defaultValue,
}) => {
	const [showAll, setShowAll] = React.useState(false);
	const [searchValue, setSearchValue] = React.useState("");

	const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const list = showAll ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())) : defaultItems.slice(0, limit);

  	return (
		<div className={cn("flex flex-col gap-3", className)}>
			<Text text={title} size="p2"/>

			{showAll && (
				<Input
					onChange={onChangeSearchInput}
					placeholder={searchInputPlaceholder}
					className="bg-[#F0F0F0] border-none"
				/>
			)}

			<div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
				{list.map((item, index) => (
					<FilterCheckbox
						key={index}
						text={item.text}
						value={item.value}
						endAdornment={item.endAdornment}
						checked={false}
						onCheckedChange={(ids) => console.log(ids)}
					/>
				))}
			</div>

			{items.length > limit && (
				<button onClick={() => setShowAll(!showAll)} className="cursor-pointer w-fit">
						<Text text={showAll ? "Скрыть" : "+ Показать все"} weight="regular" />
				</button>
			)}
		</div>
  	);
};