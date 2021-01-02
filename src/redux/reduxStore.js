import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
    sidebar: sidebarReducer,
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
})

let store = createStore(reducers);

export default store;