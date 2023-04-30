export const plainCallApi = () => {
	console.log("inside action plainCallApi");
	return {
		type: "PLAIN_PRODUCT_LIST",
		payload: "hey",
	};
};
// export const getDataFromCallApi = (payload) => {
// 	console.log("inside action getDataFromCallApi");
// 	return {
// 		type: "GET_FROM_PLAIN_PRODUCT_LIST",
// 		payload,
// 	};
// };
