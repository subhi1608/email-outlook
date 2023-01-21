import React from "react";
import "./styles.css";
const FilterView = ({ handleEmailList }) => {
	return (
		<div>
			<ul>
				<li> Filter by:</li>
				<li>
					<button
						onClick={() => {
							handleEmailList("readEmail");
						}}
					>
						{" "}
						Read
					</button>
				</li>
				<li>
					<button
						onClick={() => {
							handleEmailList("unreadEmail");
						}}
					>
						{" "}
						Unread
					</button>
				</li>
				<li>
					<button
						onClick={() => {
							handleEmailList("favoriteEmail");
						}}
					>
						{" "}
						Favorites
					</button>
				</li>
			</ul>
		</div>
	);
};

export default FilterView;
