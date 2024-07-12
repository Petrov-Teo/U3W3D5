import { configureStore } from "@reduxjs/toolkit";
import mineReducer from "../reducers";

const store = configureStore({ reducer: mineReducer });

export default store;
