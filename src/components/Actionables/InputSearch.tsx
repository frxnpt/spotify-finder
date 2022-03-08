import React from "react";
import "./InputSearch.scss";
import { DebouncedFunc } from "lodash";

type InputSearchProps = {
	onSearch: DebouncedFunc<(searchQuery: string) => Promise<void>>
	onClear: () => void;
};

export const InputSearch = ({ onSearch, onClear }: InputSearchProps) => {
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const searchQuery = event.target.value;
		console.log(searchQuery);
		if (searchQuery === "") {
			onClear();
			return;
		}
		onSearch(searchQuery);
	};
	return (
		<div className="search-wrapper">
			<input
				id="search"
				onChange={onChange}
				type="search"
				placeholder="Artists, Tracks, Albums..."
			/>
		</div>
	);
};
