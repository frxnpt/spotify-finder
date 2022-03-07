import React from "react";

type InputSearchProps = {
    onSearch : (search: string) => void
	onClear : () => void
}

export const InputSearch = ({onSearch, onClear}:InputSearchProps) => {
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const searchQuery = event.target.value;
		if (searchQuery === "") {
			onClear();
			return;
		}
		onSearch(searchQuery)
	}
	return (
		<input
			id="search"
			onChange={onChange}
			type="search"
			placeholder="Artists, Tracks, Albums..."
		/>
	);
};
