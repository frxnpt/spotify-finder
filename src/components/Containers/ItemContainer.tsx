import React from "react";
import { printConditionally } from "../../utils/printConditionally";

type ItemContainerProps = {
    title: string;
	small: boolean;
    children: any;
}
export const ItemContainer = ({title, children,small} : ItemContainerProps) => {
	
	return (
		<div className={printConditionally(small, "smallItemContainer","itemContainer")}>
			<div className="containerTop">
				<p className="containerTitle">{title}</p>
			</div>
            {children}
		</div>
	);
};
