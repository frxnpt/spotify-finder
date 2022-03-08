import React from "react";
import { Link } from "react-router-dom";
import { printConditionally } from "../../utils/printConditionally";

type ItemContainerProps = {
    title: string;
	small: boolean;
    children: any;
}
export const ItemContainer = ({title, small, children} : ItemContainerProps) => {
	const link = "/"+title
	return (
		<div className={printConditionally(small,"smallItemContainer","itemContainer")}>
			<div className="containerTop">
				<p className="containerTitle">{title}</p>
				<Link to={link.toLowerCase()} >ViewAll</Link>
			</div>
            {children}
		</div>
	);
};
