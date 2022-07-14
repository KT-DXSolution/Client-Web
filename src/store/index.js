import { createStore } from "redux";
import persistReducer from "./modules/index";

const store = createStore(persistReducer);

export default store;