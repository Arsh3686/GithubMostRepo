import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import productSaga from "../sagas/sagaindex";

const initialData = {
	apiData: [1, 2, 3, 4],
};
const reducers = (state = initialData, action) => {
	switch (action.type) {
		case "PLAIN_PRODUCT_LIST": {
			return {
				apiData: [...state.apiData, 5, 6],
			};
		}
		case "GET_FROM_PLAIN_PRODUCT_LIST": {
			console.log("in reducers", action.data);
			return {
				apiData: [action.data.items],
			};
		}
		default: {
			return state;
		}
	}
};
const plainSagaMiddleWare = createSagaMiddleware();
export const store = configureStore({
	reducer: reducers,
	middleware: () => [plainSagaMiddleWare],
});
plainSagaMiddleWare.run(productSaga);
