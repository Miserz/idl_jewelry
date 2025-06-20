import { cn } from "@/lib/utils"
import React from 'react';
import { ProductCard } from "./product-card"

interface Props {
	items: any[];
	categoryId: number;
	className?: string;
	listClassName?: string;
}


export const ProductsGroupList: React.FC<Props> = ({
	items,
	categoryId,
	listClassName,
	className,
}) => {
  return (
	<div className={className}>
		<div className={cn("grid grid-cols-3 gap-6", listClassName)}>
			{items.map((product, i) => (
				<ProductCard 
					key={product.id}
					id={product.id}
					name={product.name}
					imageUrl={product.imageUrl}
					price={product.price}
				/>
			))}
		</div>
	</div>
  );
};