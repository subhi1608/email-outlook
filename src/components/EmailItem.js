import React from "react";
import { useDispatch } from "react-redux";
import { fetchSingleEmail, singleEmail } from "../redux/emailReducer";
import { initalAvatar, formatDate } from "../utils";
import "./styles.css";

const EmailItem = ({ itemData, status, setEmailDetail, handleRead }) => {
	const {
		date,
		from = [],
		short_description = "",
		subject = "",
		id,
		isRead = false,
	} = itemData;
	const dispatch = useDispatch();
	const renderSingleEmail = () => {
		setEmailDetail({ date, subject, id });
		handleRead(id);
		dispatch(fetchSingleEmail(id));
	};
	return (
		<div>
			<section
				className={`${
					status === "idle" ? "emailItemWrapper" : "emailListBody"
				} ${isRead ? "readEmail" : ""}`}
			>
				<div className="avatarEmail">
					<button className="avatarIcon" onClick={renderSingleEmail}>
						{initalAvatar(from?.name)}
					</button>
				</div>
				<div className="emailDetails">
					<p>
						From :{" "}
						<b>
							{from?.name} {from?.email}{" "}
						</b>
					</p>
					<p>
						Subject : <b> {subject}</b>
					</p>
					<p>{short_description}</p>
					<p>
						{formatDate(date)?.split(",")[0]}{" "}
						{formatDate(date)?.split(",")[1].slice(0, 5)}{" "}
						{formatDate(date)?.split(",")[1].slice(8, 11)}
					</p>
				</div>
			</section>
		</div>
	);
};

export default EmailItem;
