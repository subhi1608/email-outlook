import React from "react";
import { useSelector } from "react-redux";
import { updateSessionStorage } from "../utils";
import LoadingSpinner from "./Loader";
import SingleEmailItem from "./SingleEmailItem";

const SingleEmailWrapper = ({ emailDetail }) => {
	const emailData = useSelector((state) => state?.email);
	const handleFavorite = (id) => {
		let favoriteEmail = emailData?.emailList?.find((item) => item.id === id);
		updateSessionStorage("favoriteEmail", favoriteEmail);
	};
	return (
		<>
			{emailData?.status === "loading" ? (
				<LoadingSpinner />
			) : (
				<>
					{emailData?.status === "master" ? (
						<SingleEmailItem
							data={emailData?.singleEmail}
							emailDetail={emailDetail}
							handleFavorite={handleFavorite}
						/>
					) : (
						""
					)}
				</>
			)}
		</>
	);
};

export default SingleEmailWrapper;
