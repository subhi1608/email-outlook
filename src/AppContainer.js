import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmailListWrapper from "./components/EmailListWrapper";
import FilterView from "./components/FilterView";
import { isIdle } from "./redux/emailReducer";
import { getSessionStorage } from "./utils";
const AppContainer = () => {
	const emailList = useSelector((state) => state?.email?.emailList);
	const [emailListData, setEmailListData] = useState([]);
	const dispatch = useDispatch();
	const handleEmailList = (key) => {
		if (key === "unreadEmail") {
			const keyData = getSessionStorage("unreadEmail");
			if (keyData) {
				setEmailListData(keyData);
			} else alert(`No records in unread`);
		} else {
			const keyData = getSessionStorage(key);
			if (keyData) {
				setEmailListData(keyData);
			} else {
				let _key = key.split("Email")[0];
				alert(`No records in ${_key}`);
			}
		}
		dispatch(isIdle());
	};

	useEffect(() => {
		if (emailList) {
			setEmailListData(emailList);
		}
	}, [emailList]);
	return (
		<div>
			<FilterView handleEmailList={handleEmailList} />
			<EmailListWrapper data={emailListData} />
		</div>
	);
};

export default AppContainer;
