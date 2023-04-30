import productSaga from "../sagas/sagaindex";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
const initialState = {
	githubArr: [],
	isLoading: false,
	isError: false,
	extraDataFetched: false,
	currentContributors: [],
};
const githubSlice = createSlice({
	name: "github",
	initialState,
	reducers: {
		callApi(state) {
			state.isLoading = true;
			console.log("called for first time");
		},
		getDataFromApi(state, action) {
			state.isLoading = false;
			console.log("in getDataFromApi toolkit", action.payload.items);

			state.githubArr.push(...action.payload.items);
		},
		callContibutorsApi(state, action) {},
		getContributors(state, action) {
			state.extraDataFetched = true;
			state.currentContributors = [];
			state.currentContributors.push(...action.payload);
		},
		getContributorsError(state) {
			state.extraDataFetched = false;
		},
		getError(state) {
			state.isError = true;
		},
	},
});

const sagaMiddleWare = createSagaMiddleware();

export const githubAction = githubSlice.actions;
export const store = configureStore({
	reducer: githubSlice.reducer,
	middleware: () => [sagaMiddleWare],
});
sagaMiddleWare.run(productSaga);
export default githubSlice;
