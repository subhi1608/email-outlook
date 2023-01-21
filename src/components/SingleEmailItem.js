import React, { useEffect } from "react";
import { formatDate } from "../utils";

const SingleEmailItem = ({ data, emailDetail, handleFavorite }) => {
	const { date, subject, id } = emailDetail;
	const renderBody = () => {
		const divElement = document.getElementById("emailBodyItemData");
		if (divElement) {
			divElement.innerHTML = data;
		}
	};
	useEffect(() => {
		renderBody();
	}, [data]);

	return (
		<section className="emailBodyItemDataSection">
			<header>
				<div className="avatarEmail">
					<button className="avatarIcon">
						{/* {initalAvatar(from?.name)} */}
					</button>
				</div>
				<div className="emailDetails">
					<p>
						<b> {subject}</b>
					</p>
					<p>
						{formatDate(date)?.split(",")[0]}{" "}
						{formatDate(date)?.split(",")[1].slice(0, 5)}{" "}
						{formatDate(date)?.split(",")[1].slice(8, 11)}
					</p>
				</div>
				<div>
					<button
						className="favbtn"
						onClick={() => {
							handleFavorite(id);
						}}
					>
						Mark as favorite
					</button>
				</div>
			</header>
			<div id="emailBodyItemData"></div>
		</section>
	);
};

export default SingleEmailItem;
