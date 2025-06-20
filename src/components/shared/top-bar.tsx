import React from "react";
import { Container } from "./container"
import { Categories } from "./categories"
import { SortPopup } from "./sort-popup"

interface Props {
	className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<Container className="flex items-center justify-between">
				<Categories />
				<SortPopup />
			</Container>
		</div>
	);
};