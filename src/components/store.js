import rootReducer from "./combinedReducer";

import { createStore } from "redux";

const store = createStore(rootReducer)

export default store;