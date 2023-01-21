import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
	emailList: [],
	singleEmail: null,
	status: "idle",
};

const emailSlice = createSlice({
	name: "email",
	initialState,
	reducers: {
		emailList(state, action) {
			let updatedEmailList = action.payload.map((item) => {
				return { ...item, isRead: false };
			});
			state.emailList = updatedEmailList;
			state.status = "idle";
		},
		singleEmail(state, action) {
			state.singleEmail = action.payload;
		},
		loading(state, action) {
			state.status = "loading";
		},
		isMaster(state, action) {
			state.status = "master";
		},
		isReadEmail(state, action) {
			state.emailList = action.payload;
		},
		isIdle(state, action) {
			state.status = "idle";
		},
	},
});

export const {
	emailList,
	singleEmail,
	loading,
	isMaster,
	isReadEmail,
	isIdle,
} = emailSlice.actions;
export default emailSlice.reducer;

export const fetchEmail = () => async (dispatch) => {
	dispatch(loading());
	const response = await fetch("https://flipkart-email-mock.now.sh/");
	const jsonResponse = await response.json();
	dispatch(emailList(jsonResponse.list));
};
export const fetchSingleEmail = (id) => async (dispatch) => {
	dispatch(loading());
	const response = await fetch(
		`https://flipkart-email-mock.vercel.app/?id=${id}`
	);
	const jsonResponse = await response.json();
	dispatch(singleEmail(jsonResponse.body));
	dispatch(isMaster());
};
