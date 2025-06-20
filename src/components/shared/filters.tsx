import React from 'react';
import { cn } from '@/lib/utils';
import { Text, RangeSlider } from "../shared";
import { Button, Input, Separator } from "../ui";
import { CheckboxFiltersGroup } from "./checkbox-filters-group"

interface Props {
	className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn("flex flex-col gap-4 border px-6 py-4 rounded-3xl", className)}>
			{/* Название */}
			<Text text="Фильтры" size="p1" />
			<Separator />

			{/* Фильтр цен */}
			<div className="flex flex-col gap-3">
				<Text text="Цена" size="p2" />
				<div className="flex gap-4">
					<Input type="number" placeholder="0" min={0} max={10000} defaultValue={0} />
					<Input type="number" placeholder="10000" min={1000} max={10000} />
				</div>

				<RangeSlider min={0} max={10000} step={100} value={[0, 10000]} />
			</div>
			<Separator />

			<CheckboxFiltersGroup
				title="Материал"
				limit={2}
				defaultItems={[
					{
						text: "Гематит",
						value: "1",
					},
					{
						text: "Родий",
						value: "2",
					},
				]}
				items={[
					{
						text: "Гематит",
						value: "1",
					},
					{
						text: "Родий",
						value: "2",
					},
				]}
			/>
			<Separator />
			<Button size="lg" className="w-full">Применить</Button>
		</div>
	);
};