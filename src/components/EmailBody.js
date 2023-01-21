import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isReadEmail } from "../redux/emailReducer";
import { setSessionStorage, updateSessionStorage } from "../utils";
import EmailItem from "./EmailItem";
import SingleEmailWrapper from "./SingleEmailWrapper";
import "./styles.css";
const EmailBody = ({ data }) => {
	const status = useSelector((state) => state?.email?.status);
	const dispatch = useDispatch();
	const [emailDetail, setEmailDetail] = useState({});

	const setEmailDetailData = (data) => {
		setEmailDetail(data);
	};

	const handleRead = (id) => {
		let readEmail = data?.find((item) => item.id === id);
		let updatedEmailList = data.map((item) => {
			if (item.id === id) {
				return { ...item, isRead: true };
			}
			return item;
		});
		dispatch(isReadEmail(updatedEmailList));
		updateSessionStorage("readEmail", { ...readEmail, isRead: true });
		let unreadEmailList = updatedEmailList.filter((item) => !item.isRead);
		setSessionStorage("unreadEmail", unreadEmailList);
	};

	return (
		<div className="emailBody">
			<div className="emailListWrapper">
				<section>
					{data?.map((item) => {
						return (
							<EmailItem
								itemData={item}
								key={item.id}
								status={status}
								setEmailDetail={setEmailDetailData}
								handleRead={handleRead}
							/>
						);
					})}
				</section>
				<SingleEmailWrapper emailDetail={emailDetail} />
			</div>
		</div>
	);
};

export default EmailBody;
