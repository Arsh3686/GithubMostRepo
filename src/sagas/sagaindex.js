import { put, takeLatest } from "redux-saga/effects";
import { githubAction } from "../redux/reducers";

function* getProducts() {
	console.log("getProducts called");
	try {
		let data = yield fetch(
			"https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc&page=2"
		);
		data = yield data.json();

		console.log("action is called ", data);

		yield put(githubAction.getDataFromApi(data));
	} catch (err) {
		console.log("error", err);
		yield put(githubAction.getError());
	}
}
function* getContributors(action) {
	try {
		let contibutorsList = yield fetch(
			`https://api.github.com/repos/${action.payload.ownerName}/${action.payload.repo}/stats/contributors`
		);
		contibutorsList = yield contibutorsList.json();
		console.log("contibutorsList", contibutorsList);
		console.log("contibutorsList", action);

		yield put(githubAction.getContributors(contibutorsList));
	} catch (err) {
		yield put(githubAction.getContributorsError());
	}
}

function* productSaga() {
	console.log("productSaga called");
	yield takeLatest(githubAction.callApi.type, getProducts);
	yield takeLatest(githubAction.callContibutorsApi.type, getContributors);
}
export default productSaga;
