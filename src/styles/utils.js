export const initalAvatar = (name) => {
	return name.charAt(0).toUpperCase();
};

export const formatDate = (date) => {
	return new Date(date).toLocaleString();
};

export const getSessionStorage = (key) => {
	const item = sessionStorage.getItem(key);
	if (item) {
		return JSON.parse(item);
	} else return "";
};
export const setSessionStorage = (key, value) => {
	sessionStorage.setItem(key, JSON.stringify(value));
};
export const updateSessionStorage = (key, value) => {
	const emailList = getSessionStorage(key) || [];
	let isExist = emailList?.find((item) => item.id === value.id);
	if (!isExist) {
		let updatedEmailList = [...emailList, value];
		setSessionStorage(key, updatedEmailList);
	}
};
