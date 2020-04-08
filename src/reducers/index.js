import { combineReducers } from "redux";

import loggedInUser from "./loggedInUserReducer";

export default combineReducers({
    loggedInUser,
});
