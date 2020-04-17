export default (state = { id: null }, action) => {
    switch (action.type) {
        case "TRY_LOGIN":
            return action.payload;

        case "LOG_OUT":
            return { id: null };

        case "INVALID_LOGIN":
            return { id: 0, name: "Invalid user or password." };

        default:
            return state;
    }
};
