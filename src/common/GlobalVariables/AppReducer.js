export const Actions = {
    UPDATE_LANGUAGE: "UPDATE_LANGUAGE",
};

export const AppReducer = (state, action) => {
    switch (action.type) {
        case Actions.UPDATE_LANGUAGE:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};
