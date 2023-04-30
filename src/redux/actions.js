export const productList = () => {
	// let data = await fetch(
	// 	"https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc&page=2"
	// );
	// data = await data.json();
	console.log("action is called in productList");
	return {
		type: "PRODUCT_LIST",
		data: "dsd",
	};
};
