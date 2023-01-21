import React from "react";
import { useSelector } from "react-redux";
import EmailBody from "./EmailBody";

const EmailListWrapper = ({ data }) => {
	const status = useSelector((state) => state?.email?.status);
	return (
		<div>
			<EmailBody data={data} />
		</div>
	);
};

export default EmailListWrapper;
