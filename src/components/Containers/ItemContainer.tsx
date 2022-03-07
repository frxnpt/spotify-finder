import React from "react";

type ItemContainerProps = {
    title: string;
    children: any;
}
export const ItemContainer = ({title, children} : ItemContainerProps) => {
	return (
		<div className="itemContainer">
			<div className="containerTop">
				<p className="containerTitle">{title}</p>
			</div>
            {children}
		</div>
	);
};
