import { configureStore } from "@reduxjs/toolkit";
import emailReducer from "./emailReducer";

export const store = configureStore({
	reducer: {
		email: emailReducer,
	},
});
