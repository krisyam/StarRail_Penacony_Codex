export const Actions = {
    UPDATE_AUTHENTICATED: "UPDATE_AUTHENTICATED",
    UPDATE_SETTINGS: "UPDATE_SETTINGS",
    UPDATE_START_DATE: "UPDATE_START_DATE",
    UPDATE_TITLE: "UPDATE_TITLE",
    UPDATE_USER: "UPDATE_USER",
};

export const AppReducer = (state, action) => {
    switch (action.type) {
        case Actions.UPDATE_AUTHENTICATED:
            return {
                ...state,
                authenticated: action.payload,
            };
        case Actions.UPDATE_SETTINGS:
            return {
                ...state,
                settings: action.payload,
            };
        case Actions.UPDATE_START_DATE:
            return {
                ...state,
                settings: action.payload,
            };
        case Actions.UPDATE_TITLE:
            return {
                ...state,
                title: action.payload,
            };
        case Actions.UPDATE_USER:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};
