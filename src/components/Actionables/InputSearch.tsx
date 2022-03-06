import React from "react";

type InputSearchProps = {
    updateSearch : () => void
}

export const InputSearch = ({updateSearch}:InputSearchProps) => {
	return (
		<input
			id="search"
			onChange={updateSearch}
			type="search"
			placeholder="Artists, Tracks, Albums..."
		/>
	);
};
