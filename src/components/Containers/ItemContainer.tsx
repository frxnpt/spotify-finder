import React from "react";
import { Link } from "react-router-dom";
import { printConditionally } from "../../utils/printConditionally";

type ItemContainerProps = {
    title: string;
	small: boolean;
    children: any;
	linkText: string;
	linkRef: string;
}
export const ItemContainer = ({title, linkText, linkRef, small, children} : ItemContainerProps) => {
	return (
		<div className={printConditionally(small,"smallItemContainer","itemContainer")}>
			<div className="containerTop">
				<p className="containerTitle">{title}</p>
				<Link className="pageLink" to={linkRef.toLowerCase()}>{linkText}</Link>
			</div>
            {children}
		</div>
	);
};
