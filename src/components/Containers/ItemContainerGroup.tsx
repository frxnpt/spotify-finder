import React from "react";

type ItemContainerGroupProps = {
	children: any;
};
export const ItemContainerGroup = ({ children }: ItemContainerGroupProps) => {
	return <div className="itemContainerGroup">
        {children}
        </div>;
};
export default ItemContainerGroup;
