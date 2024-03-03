import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./mainSlice";
import searchReducer from "./searchSlice";
import messageReducer from "./messageSlice";

const store = configureStore({
    reducer:{
        app:mainReducer,
        search: searchReducer,
        chat: messageReducer,
    },
})

export default store;