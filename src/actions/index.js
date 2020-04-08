import userList from "../userList.json";

export const tryLogin = (email, password) => async (dispatch) => {
    const response = await userList.users;
    const foundUser = response.find(
        (user) => user.email === email && user.password === password
    );
    if (foundUser) {
        dispatch({ type: "TRY_LOGIN", payload: foundUser });
    } else {
        dispatch({ type: "INVALID_LOGIN" });
    }
};

export const logOut = () => {
    return {
        type: "LOG_OUT",
    };
};
